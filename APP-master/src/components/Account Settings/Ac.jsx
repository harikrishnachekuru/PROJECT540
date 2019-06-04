import React, { Component } from 'react';
import {Row,Col,Card,CardBody,CardText,CardTitle} from 'reactstrap'
import {Link} from 'react-router-dom'
class Ac extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Row><Col xs="3">
        <br></br>
        <form><br/>
            <Link to="/Change" style={{color:'black'}}>Change  Password</Link><br></br>
            <Link to="/Deactivate" style={{color:'black'}}>Deactivate Account</Link>
            </form>
            </Col></Row>     
            </div> );
    }
}
 
export default Ac;