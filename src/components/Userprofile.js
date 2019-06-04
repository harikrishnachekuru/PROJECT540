import React, { Component } from 'react';
import { Card, CardBody,  CardTitle, CardText} from 'reactstrap';
import jwt_decode from 'jwt-decode'
import Avatar from 'react-avatar';
import {Link} from 'react-router-dom';
import axios from 'axios';

class  User extends Component {
    constructor() {
        super()
        this.state = {
            user_name: 'Username',
            userarray:[]
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
    render() { 
        return ( <div>
          <br></br>
            <Card>
              
              <CardBody className="center">
              <Avatar  src={this.state.userarray.imageUrl} size="150" round={true} /><br/><hr></hr>
                <CardTitle><b>@{this.state.userarray.user_name}</b></CardTitle><hr></hr>
                <CardText><b>Profession:</b>{this.state.userarray.profession}</CardText><hr></hr>
                <CardText><Link to="Profiles" >View Profile</Link></CardText>
              </CardBody>
            </Card></div> );
    }
}
 
export default User;