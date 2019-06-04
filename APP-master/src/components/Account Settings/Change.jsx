import React, { Component } from 'react';
import {Row,Col,Button,Card} from 'reactstrap';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
class Change extends Component {
    constructor() {
        super()
        this.state = {
            password: '',
            new_password: '',
            re_enter: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()
        const user = {
            password: this.state.password,
            new_password:this.state.new_password,
        }
        if((this.state.new_password) === (this.state.re_enter)){
        if(localStorage.usertoken){
            axios.post('http://localhost:4001/api/user/chpass/' + jwt_decode(localStorage.usertoken).user_name , user)
                .then(this.props.history.push('/profile'),
                    alert('Password changed Successfully'));
              }
              else{
                this.props.history.push('/Login');
              }}else{
                  alert('Password doesnt match')
              }
    }

    render() { 
        return ( <div>
<Row>
<Col xs="2"></Col>
<Col xs="6"><br></br><br></br>
 <h2>Change My Password</h2>
<form onSubmit={this.onSubmit}>
  <br/>
    <input required type="password"
     className="form-control"
     name="password"
    placeholder="Enter the Current Password"
    value={this.state.password}
    onChange={this.onChange}/><br/>

    <input required type="password"
    className="form-control"
    name="new_password"
     placeholder="Enter the New Password"
     value={this.state.new_password}
     onChange={this.onChange}/><br/>

    <input required type="password"
     className="form-control"
     name="re_enter"
     placeholder="Re-Enter the Password"
     value={this.state.re_enter}
     onChange={this.onChange}/><br/>
<Button type="submit" className="btn btn-danger">Submit</Button>
</form>
</Col>
<Col xs="2"></Col>
</Row>
            </div> );
    }
}
 
export default Change;