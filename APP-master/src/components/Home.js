import React from 'react';

import Main from './Main';
import '../Main.css';
import Userprofile from './Userprofile';
import Suggestions from './Suggestions';
import {Col,Row} from 'reactstrap'
import { Grid } from 'react-flexbox-grid';

//import Zoom from 'react-reveal/Zoom';


export default class Example extends React.Component {
     
componentDidMount(req,res){
  if(localStorage.usertoken){

  }
  else{
    alert('Please Sign in first');
    window.close('http://localhost:3000/Home');
    window.open('http://localhost:3000/Login');
  }
}



  render() {
    return (
        <Grid fluid>
        
        <Row>
          <Col xs={3}  ><Userprofile/>&nbsp;</Col>
          <Col xs={6}  >&nbsp;<Main/></Col>
          <Col xs={3}  >&nbsp;{/*<Suggestions/>*/}</Col>

        </Row>
        </Grid>
         
      
      
    );
  }
}