import React, { Component } from 'react';
import {Row,Col,Card} from 'reactstrap';
import Modal from 'react-responsive-modal';
import UploadProject from './UploadProject';
import Avatar from 'react-avatar';
import Zoom from 'react-reveal/Zoom';
import jwt_decode from 'jwt-decode'
import axios from 'axios';
class ProjectsProfile extends Component {
    
        state = {
            open: false,
            userarray:[]
          };
            
          componentDidMount () {
            axios.get('http://localhost:4001/api/user/profile/' + jwt_decode(localStorage.usertoken)._id)
            .then(response => {
              this.setState({ userarray: response.data });
            })
            .catch(function (error) {
              console.log(error);
            })
          }
        

          onOpenModal = () => {
            this.setState({ open: true });
          };
        
          onCloseModal = () => {
            this.setState({ open: false });
          };

      render() { 
          const { open } = this.state;
          
        return (<div><br></br>
            <Card>
            <Row>
            <br/>
           <Col xs="9"> <Avatar  src={this.state.userarray.imageUrl} size="60" round={true} /></Col>

           <Col xs="3">
           <div>
       <Zoom><button className="popup" onClick={this.onOpenModal}>Log your Project</button></Zoom> 
      <Modal
        
        open={open} onClose={this.onCloseModal} center>
          <UploadProject/>
        </Modal>
      </div>  </Col>
            </Row>
            </Card>
        </div> );
    }
}
 
export default ProjectsProfile;