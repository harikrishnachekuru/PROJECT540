import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Experts1f from './Experts1f';
import { Grid } from 'react-flexbox-grid';
class  Experts extends Component {
    
    render() { 
        return (<Grid fluid>
            <Row>
          <Col xs="3"><Experts1f/></Col>
          <Col xs="3"><Experts1f/></Col>
          <Col xs="3"><Experts1f/></Col>
          <Col xs="3"><Experts1f/></Col>
        </Row>
        <br/>
        <Row >
          <Col    xs="3"><Experts1f/></Col>
          <Col  xs="3"><Experts1f/></Col>
          <Col xs="3"><Experts1f/></Col>
          <Col xs="3"><Experts1f/></Col>
        </Row>
        <br/>
        <Row>
          <Col xs="3"><Experts1f/></Col>
          <Col  xs="3"><Experts1f/></Col>
          <Col xs="3"><Experts1f/></Col>
          <Col xs="3"><Experts1f/></Col>
        </Row>
        </Grid>  );
    }
}
 
export default Experts ;