import React, { Component } from 'react';
import { Card, CardHeader, CardBody,
  CardTitle, CardText,Row,Col } from 'reactstrap';
import Avatar from 'react-avatar';
import {Link} from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Modal from 'react-awesome-modal';
import EditImage from './EditImage'
import plus from '../Assets/plus.png'


class Personprof extends Component {
  constructor(){
    super();
    {  
     this.state={
              loading: true,
              person: null,
              title:'',
              profession: 'Edit your Profession',
              follow: '',
              userarray: []
              
      };

    }
    
  }

  componentDidMount(req, res) {
    axios.get('http://localhost:4001/api/user/profile/' + jwt_decode(localStorage.usertoken)._id)
      .then(response => {
        this.setState({ userarray: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
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
      if (!this.state.loading) {
        return <div>loading...</div>;
      }
  
      if (this.state.decoded) {
        return <div>didn't get a person</div>;
      }
    return ( <div>
            <div>
                   <Modal 
                          visible={this.state.visible}
                          width="250"
                          height="200"
                          effect="fadeInDown"
                          onClickAway={() => this.closeModal()}>
                          <div>      
                         <EditImage/>     
                          </div>
                      </Modal>
                  </div>
      <Card><br/>
        <Row><Col xs></Col>
        <Col xs><Avatar className="profile-photo" src={this.state.userarray.imageUrl} alt="img" size="180" round={true} />
</Col>
<Col xs><button onClick={() => this.openModal()} > <img src={plus}/></button>
</Col>
      </Row>
      <CardTitle className="center"><b>@{this.state.userarray.user_name}</b></CardTitle>
        <CardHeader className="center"><b>{this.state.userarray.first_name} {this.state.userarray.last_name}</b></CardHeader>
        <CardBody>
          {/*<CardText className="profession">Profession</CardText>
          <CardText className="follow"><code>Follow UserName on</code></CardText>*/}
          <CardText className="ellipsis"><b>Email:</b>&nbsp;<a href="#">{this.state.userarray.email}</a></CardText><hr/>
          <CardText className="ellipsis"><b>Phone:</b>&nbsp;<a href="#">{this.state.userarray.phone_number}</a></CardText><hr/>
          <CardText className="ellipsis"><b>Profession:</b>&nbsp;<a href="#">{this.state.userarray.profession}</a></CardText><hr/>
          <CardText className="ellipsis"><b>Passion:</b>&nbsp;<a href="#">{this.state.userarray.passion}</a></CardText><hr/>
          <CardText className="ellipsis"><b>Location:</b>&nbsp;<a href="#">{this.state.userarray.location}</a></CardText>
         {/*<CardText>Github<a href="www.Github.com">Githubx.com</a></CardText> */}
        </CardBody>
        
      </Card>
    </div>);
  }
}
 
export default Personprof;