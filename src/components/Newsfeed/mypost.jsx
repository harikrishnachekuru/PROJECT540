import React from 'react';
import {Card,Row,Col} from 'reactstrap';
import Avatar1 from '../Newsfeed/Avatar';

//import R1 from "./R1";

//import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
//import NavbarCollapse from 'react-bootstrap/NavbarCollapse';


const post = (props) => {
    return (
      <div className="post">
      <Row><Col xs="1">
    <br></br><Avatar1/></Col>
        <Col xs="9"><b><br></br>&ensp;<a size='40px'>{props.post.user_name}</a></b><br></br><p size='20px'>{props.post.date}</p></Col><Col xs="2"><br></br></Col></Row>
      <div>
        <h4 className="post_title">{props.post.title}</h4>
        <p className="description"><a size='20px'>{props.post.description}</a></p>
        <div className="control-buttons">
         {/*} <button className="edit"
            onClick={() => props.Edit(props.post._id)
            }
          >Edit</button>*/}
          <button className="delete"
            onClick={() => props.deletePost(props.post._id)}
          >Delete</button>
        
        </div>
        
      </div>
      </div>  

    );
}
export default post;