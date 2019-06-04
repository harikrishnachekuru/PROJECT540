import React, { Component } from 'react';
import { Card, CardBody,  CardTitle, CardText} from 'reactstrap';
import jwt_decode from 'jwt-decode'

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
        
            
             
                {this.state.userarray.user_name}
               
              </div> );
    }
}
 
export default User;