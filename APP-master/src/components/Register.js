import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            user_name: '',
            email: '',
            password: '',
            re_enter: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    validateEmail(email){
        
    }
  onChange (e) {
      this.setState({ [e.target.name]: e.target.value })
      if(e.target.name==='email')
      {
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
      const result = pattern.test(e.target.value);
      if(result===true){
        this.setState({
          emailError:false,
          email:e.target.value
        })
      } else{
        this.setState({
          emailError:true
        })
      }
    }
  }
    onSubmit (e) {
        e.preventDefault()
        const { password,re_enter,user_name,last_name,email,first_name,emailError } =this.state;
        if(user_name === ''){
            alert("enter user name")
       }
       else if(email === ''){
        alert("enter email")
      }
      else if(emailError === true){
        alert("enter valid email")
      }
      else if(password === ''){
        alert("enter password")
      }
      else if(re_enter === ''){
        alert("re-enter password")
      }
      else if(re_enter!==password ){
        alert("password doesn't match");
      }
      else{
        alert('Registered Sucessfully!!');
        const user = {
          
            user_name: this.state.user_name,
            email: this.state.email,
            password: this.state.password,
            re_enter: this.state.re_enter
        }
        if(this.state.password === this.state.re_enter){
        
        register(user).then(res => {
            this.props.history.push(`/login`)
        })}
    }}

    render () {
        return (
            
            <div className="container">
           
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal"><b> Register</b></h1>
                            <div className="form-group">
                            
                                <input required type="text"
                                    className="form-control"
                                    name="user_name"
                                    placeholder="Enter Unique User Name"
                                    value={this.state.user_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                               
                                <input required type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                                    {this.state.emailError ? <span style={{color:"red"}}>Please enter valid email address</span>:''}
                            </div>
                            <div className="form-group">
                               
                                <input required type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                               
                                <input required type="password"
                                    className="form-control"
                                    name="re_enter"
                                    placeholder="Confirm Password"
                                    value={this.state.re_enter}
                                    onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Register
                            </button>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Register