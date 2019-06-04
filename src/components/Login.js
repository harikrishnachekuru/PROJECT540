import React, { Component } from 'react'
import { login } from './UserFunctions'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';

import {Layout} from 'react-mdl';
import login1 from './Assets/login1.png';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
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
        const { email,password,emailError } = this.state;
        if(email === ''){
            alert("Enter email");
          }
         
        else if(password === ''){
              alert("Enter passord")
         }
         else{
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        
        login(user).then(res => {
            if (res) {
                this.props.history.push(`/Home`)
            }  
            else{
                alert('Either of your Email or Password is Incorrect');
            }
           
           })
    
}}

    render () {
        return (
          
            <Layout className="co">
                <div className="row">
                    <div className="col-md-3 mt-5 mx-auto"><br></br><br></br><br></br><br></br>
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal" style={{color:'white'}}><b>Login&emsp;<img src={login1} width="40px" alt="login"/></b></h1>
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
                               
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Login
                            </button><br></br>
                            <h6 style={{color:'white'}}>&emsp;&emsp;&emsp;&emsp;&emsp;
                         New to us? 
                         <b>
                           <Link to="Register" >REGISTER</Link>
                           </b></h6>
                        </form>
                    </div>
                </div>
                </Layout>    
           
        )
    }
}

export default Login