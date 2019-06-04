import React, { Component } from 'react';
import { Card,  CardTitle,CardBody,Button,Row,Col } from 'reactstrap';
import {Image} from 'react-bootstrap';
import Avatar1 from '../Newsfeed/Avatar';
const project = (props) => {
        return ( <div className="post">
           
      <Row><Col xs="1">
    <br></br><Avatar1/></Col>
        <Col xs="9"><b><br></br>&ensp;<a size='40px'>{props.project.user_name}</a></b><br></br><p size='20px'>{props.project.date}</p></Col><Col xs="2"><br></br></Col></Row>
      <div>
        <h2 className="post_title">{props.project.title}</h2>
        <p className="project_category"><a style={{fontSize:'15px'}}>{props.project.category}</a></p>
        <p className="description">{props.project.description}</p>
        <p className="project_message"><a size='30px'>{props.project.technologies_used}</a></p>
        <div className="control-buttons">
         {/*} <button className="edit"
            onClick={() => props.Edit(props.post._id)
            }
          >Edit</button>*/}
          <button className="delete"
            onClick={() => props.deleteProject(props.project._id)}
          >Delete</button>
        
        </div>
        
      </div>
              
    </div>);
    }
             
              
export default project;
  
   