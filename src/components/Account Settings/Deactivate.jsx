import React, { Component } from 'react';
import { Button ,Card,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
class Deactivate extends Component {
    /*constructor() {
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
    }
*/
    onSubmit (e) {
        e.preventDefault()
        if(localStorage.usertoken){
            axios.get('http://localhost:4001/api/user/delete/' + jwt_decode(localStorage.usertoken)._id )
                .then(alert('User Account Deactivated'),
                    localStorage.removeItem('usertoken'),
                        window.close('http://localhost:3000/Deactivate'),
                        window.open('http://localhost:3000/')
                    );
              }
              else{
                this.props.history.push('/Login');
              }
    }
    render() { 
        return ( <div><Row><Col xs="2"></Col><Col xs="6"><br/><br/>
        <h2>Deactivate My Account</h2><br></br>
        <h6>Confirm to Delete Account. If deleted cannot be retraced.</h6><br></br>
            <form onSubmit={this.onSubmit}>
                {/*<input type="text"
                 className="form-control"
                 placeholder="Enter Email"
                 value={this.state.password}
                onChange={this.onChange}></input><br></br>

                <input type="text "
                 className="form-control"
                 placeholder="Enter Password"
                 value={this.state.password}
    onChange={this.onChange}/><br></br>*/}
            <Button className="btn btn-danger" type="submit">Deactivate</Button>   
            </form>  
            </Col><Col xs="2"></Col></Row>
    </div> );
    }
}
 
export default Deactivate;