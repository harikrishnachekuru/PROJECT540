import React, { Component } from 'react';
//import { connect } from 'react-redux';
import axios from 'axios';
import close from './close';
import jwt_decode from 'jwt-decode';
import dateFormat from 'dateformat';
export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescrition = this.onChangeDescrition.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      post_title: '',
      post_description: '',
      user_name:'',
      date:'',
      userarray:[],
      imageUrl:''
     
    }
  }
  onChangeTitle(e) {
    this.setState({
      post_title: e.target.value
    });
  }
  onChangeDescrition(e) {
    this.setState({
      post_description: e.target.value
    })  
  }
  

  onSubmit(e) {
    
    const obj = {
      title: this.state.post_title,
      description: this.state.post_description,
      user_name: jwt_decode(localStorage.usertoken).user_name,
      imageUrl: this.state.userarray.imageUrl,
      date: dateFormat(new Date())
    };
    axios.post('http://localhost:4001/api/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      post_title: '',
      post_description: '',
      user_name:'',
      date:'',
      imageUrl: ''
    })
  }
// handleSubmit = (e) => {
// e.preventDefault();
//  const title = this.getTitle.value;
//  const message = this.getMessage.value;
//  const data = {
//   id: new Date(),
//   title,
//   message,
//   editing: false
//  }
//  this.props.dispatch({
//  type: 'ADD_POST',
//  data
//  })
//  this.getTitle.value = '';
//  this.getMessage.value = '';
// }

componentDidMount(){
  axios.get('http://localhost:4001/api/user/profile/' + jwt_decode(localStorage.usertoken)._id)
    .then(response => {
      this.setState({ userarray: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
}
render() {
return (

<div className="post-container"><br></br>
<close/>
  <h1 className="post_heading">Create a Post</h1><br></br>
  <form className="form" onSubmit={this.onSubmit}>
   <input required type="text" 
   ref={(input) => this.getTitle = input}
   placeholder="Enter Post Title" 
   value={this.state.post_title}
   onChange={this.onChangeTitle}/><br /><br />
   <textarea required rows="5" 
   ref={(input) => this.getMessage = input}
   cols="28" placeholder="Enter Post" 
   value={this.state.post_description}
   onChange={this.onChangeDescrition}/><br /><br />
   <button>Post</button><br></br>
  </form>
</div>
);
}
}
