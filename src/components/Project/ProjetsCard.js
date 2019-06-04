import React, { Component } from 'react';
import { Card,  CardTitle,CardBody,Button,Row,Col } from 'reactstrap';
import {Image} from 'react-bootstrap';
import Avatar from 'react-avatar';
import Avatar1 from '../Newsfeed/Avatar';

const project = (props) => {
        return (<div className="post">
              <Row><Col xs="1">
 <br></br><Avatar src={props.project.imageUrl} size="40" round={true}/></Col>
     <Col xs="9"><b><br></br>&ensp;<a size='40px'>{props.project.user_name}</a></b><br></br><p size='20px'>{props.project.date}</p></Col><Col xs="2"><br></br></Col></Row>
   <div>
     <h2 className="post_title">{props.project.title}</h2>
     <Row>
       <label>
         &emsp;<b>Category:</b>
       </label>
     <p className="project_category">&emsp;{props.project.category}</p>
     </Row>
     <p className="description">{props.project.description}</p>
    <Row><label>&emsp;<b>Technologies used:</b></label>
       <p className="project_message">&emsp;{props.project.technologies_used}</p></Row>
     
   </div>
           
 </div>);
    }

export default project;
  
   