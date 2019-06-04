import React, { Component } from 'react';
import '../App.css';
import {Row,Col} from 'reactstrap'
import Ob4 from './Ob4';

class ob1 extends Component {
    state = {  }
    render() { 
        return (<div className="section2"><Row><Col xs="1"></Col><Col xs=""><br/><br/><Ob4/></Col>
        <Col ><br/><br/><br/><br/><br/><br/><br/><br/><br/><h3  style={{color:'white'}}>Building a networking plaform where students can interact with their peers,
          exchange their Project work, ideas, clarify their doubts form industry
          experts from across the globe or seek professional help from peers</h3></Col></Row><br/> </div> );
    }
}
 
export default ob1;
