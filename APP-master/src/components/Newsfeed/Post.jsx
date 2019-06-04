import React from 'react';
import {Card,Row,Col} from 'reactstrap';
import Avatar from 'react-avatar';
import Avatar1 from './Avatar';

//import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
//import R1 from "./R1";

//import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
//import NavbarCollapse from 'react-bootstrap/NavbarCollapse';


const post = (props) => {

    return (
      <div className="post">
      <Row>
               <Col xs="1"> <Avatar src={props.post.imageUrl} size="40" round={true}/>
             </Col>
             
             <Col xs="5">
             <b><h4><a size='40px'>{props.post.user_name}</a></h4> </b>
            <b><h4> <p size='20px'>{props.post.date}</p></h4></b>
               </Col>
              </Row><br></br>
      <div>
        <h2 className="post_title">
       {props.post.title}
        </h2>
        <p className="description">{props.post.description}</p>
        <div className="control-buttons">
         {/*} <button className="edit"
            onClick={() => props.dispatch({ type: 'EDIT_POST', id: props.post._id })
            }
          >Edit</button>
          <button className="delete"
            onClick={() => props.deletePost(props.post._id)}
          >Delete</button>*/}

        </div>&nbsp;
        
      </div>
      </div>  

    );
}
export default post;