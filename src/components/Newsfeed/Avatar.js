import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import Avatar from 'react-avatar';
import Zoom from 'react-reveal/Zoom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() { 
      return (<div>
         <Zoom><Avatar  src={this.state.userarray.imageUrl} size="40" round={true} /></Zoom>    
      </div>  );
  }
}

export default App;