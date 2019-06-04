import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import {Card,Row,Col} from 'reactstrap';

//import { connect } from 'react-redux';
import axios from 'axios';
export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
    this.state = {
        selectedFile:''
    }
}

onChange(e){
    this.setState({
      selectedFile: e.target.files[0]
    });
  }
  
  onSubmit(e) {
    const  {
        selectedFile
      } = this.state;
      let formData = new FormData();
  formData.append('selectedFile',selectedFile);
    if(localStorage.usertoken){
    axios.post('http://localhost:4001/api/user/addimage/' + jwt_decode(localStorage.usertoken)._id ,formData)
        .then(res => console.log(res.data));
      }
      else{
        this.props.history.push('/Login');
        //alert('Login First');
      }
    
    this.setState({
        selectedFile:''
    })
    
  }
render() {
return (
<div className="post-container1">
<br></br>
  <h1 className="post_heading">Edit Image</h1>
 <br></br>
  <form className="form" onSubmit={this.onSubmit}>
  <input 
   type="file"
   name="selectedFile"
   onChange={this.onChange}/>
   <button className="addimg">Update</button>

  </form>
</div>
);
}
}