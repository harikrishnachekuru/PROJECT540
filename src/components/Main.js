import React, { Component } from 'react';
import PostForm from './Newsfeed/Postform';
import AllPost from './Newsfeed/Allpost';
import '../Main.css';
import {Card,Row,Col} from 'reactstrap';
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import Avatar from 'react-avatar';
import Modal from 'react-awesome-modal';
import Zoom from 'react-reveal/Zoom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible : false,
        userarray: []
    }
}

componentDidMount () {
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
      return (<div>
          <Card><Row><Col xs="0"></Col><Col xs="3">
         <Zoom><Avatar  src={this.state.userarray.imageUrl} size="50" round={true} /></Zoom> 
          </Col><Col xs="7"></Col><Col xs="1">
          <section>
               
          <Zoom> <button className="popup" onClick={() => this.openModal()} >Post</button></Zoom>
                <Modal 
                    visible={this.state.visible}
                    width="700"
                    height="400"
                    effect="fadeInDown"
                    onClickAway={() => this.closeModal()}
                >
                
                    <div>
                        
                        <PostForm/>
                        
                    </div>
                </Modal>
            </section>
  

</Col>
</Row>
</Card>&nbsp;

<div><AllPost/></div>

          
      </div>  );
  }
}

export default App;