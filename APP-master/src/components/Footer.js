import React, { Component } from 'react';
import {Footer,FooterLinkList,FooterSection} from 'react-mdl'
import {Link } from 'react-router-dom';


import {Row,Col} from 'reactstrap';
class Foote extends Component {
    state = {  }
    render() { 
        return (
        <div className="footer" style={{backgroundColor:'#424242'}}><Row>
            <Col xs="4"></Col>
            <Col xs="4">
        <Footer>
        
        <FooterSection type="bottom" >
            
            <Link to="/Tandc" component="/Tandc"  style={{color:'white'}}>Terms and Conditions</Link>
           
               <p style={{color:'white'}}>Teknet @ private limited 2019</p>
           
        </FooterSection>
        
        </Footer>
        </Col>
        <Col xs="4"></Col>

        </Row>
      </div>

        
               )
    }
}
 
export default Foote;