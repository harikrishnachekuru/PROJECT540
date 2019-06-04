import React, { Component } from 'react';
//import Welcomepro from './Project/Welcomepro';
import {Container ,Row,Col} from 'reactstrap';
import AllProjects from './Project/AllProjects';
//import ProjetsCard from './Project/ProjetsCard'
import ProjectsProfile from './Project/ProjectsProfile';
import { Grid } from 'react-flexbox-grid';
import Userprofile from './Userprofile';
class  News extends Component {
    componentDidMount(req,res){
        if(localStorage.usertoken){
      
        }
        else{
          alert('Please Sign in first');
          window.close('http://localhost:3000/Projects');
          window.open('http://localhost:3000/Login');
        }
      }   
    render() { 
        return ( 
<Grid fluid>
    <Row> 
     
        </Row>
        <Row>
            <Col xs="3" >{/*<FiltersP/>*/}<Userprofile/></Col>
            <Col xs="6"><ProjectsProfile/><br/><AllProjects/></Col>
            <Col xs="3">{/*<TopProjectsP/>*/}<br/>{/*<MostviewProjects/>*/}</Col>
        </Row>
</Grid>
        );
    }
}
export default  News;