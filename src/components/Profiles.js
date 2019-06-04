import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Container,Card,Row,Col,CardHeader} from 'reactstrap';
import Personprof from './Profile_/Personprof';
import Userdisplay from './Profile_/Userdisplay';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Modal from 'react-awesome-modal';
import EditProfile from './EditProfile';
import { Grid } from 'react-flexbox-grid';
//import Zoom from 'react-reveal/Zoom';

class  Profiles extends Component {
  constructor(props) {
    super(props);

   
    this.state = {
      
      userarray: [],
     visible : false
    }
}


  async componentDidMount() {
    if(localStorage.usertoken){
    axios.get('http://localhost:4001/api/user/profile/' + jwt_decode(localStorage.usertoken)._id)
    .then(response => {
      this.setState({ userarray: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
  }else{
    alert('Please logIn ');
    window.close('http://localhost:3000/Profiles');
    window.open('http://localhost:3000/Login');
  }
  }
 

openModal() {
this.setState({
    visible : true
});
}

closeModal() {
this.setState({
    visible : false
});
}
    render() { 
        return (
        <Grid fluid>
                <Row>
                <Col xs="3"><br/><Personprof/></Col>
                <Col xs="6"><br/><Userdisplay/></Col><br/><br/>
                 <Col className="center" xs="3"><br/> <Row> <section>
               
              <button className="popup" onClick={() => this.openModal()} >Edit Profile</button>
                     <Modal 
                         visible={this.state.visible}
                         width="1050"
                         height="600"
                         effect="fadeInDown"
                         onClickAway={() => this.closeModal()}
                     >
                     
                         <div>
                             
                             <EditProfile/>
                             
                         </div>
                     </Modal>
                 </section></Row>&nbsp;&nbsp;
                 <Row>&emsp;&emsp;
                   <Container>
                   <Card>
                     <CardHeader><h4><b>Info</b></h4></CardHeader>
                     <Col xs="12">
                     
                   <form>
                  <p style={{textAlign:'left'}}>
                    <b>OverView </b>
                    </p>               
                    <p style={{textAlign:'left'}}>{this.state.userarray.overview}</p>
              </form><hr></hr> 
              <form>
                <p style={{textAlign:'left'}}><b>Stream</b></p>
                <p style={{textAlign:'left'}} >{this.state.userarray.stream}</p>
                
              </form><hr></hr>
              <form>
                <p style={{textAlign:'left'}}><b>Location</b></p>
                <p style={{textAlign:'left'}}>{this.state.userarray.location}</p>
                
              </form>
              
              </Col>
                   </Card> 
                 </Container>

                 </Row>
                 </Col>
                
                </Row>
            </Grid> );
    }
}
 
export default  Profiles;