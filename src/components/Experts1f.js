import React, { Component } from 'react';
import { Card, CardBody,
  CardTitle, CardSubtitle ,Button} from 'reactstrap';
  import {Image} from 'react-bootstrap';
import professor from './Assets/professor.png'
class Experts1f extends Component{
    render(){var mystyle={height:'100px',width:'100px'};
  return  (
    <div>
      <Card>
        <CardBody>
            <Image style={mystyle} src={professor}/>
          <CardTitle>industry Expert</CardTitle>
          <CardSubtitle>XXXXX company</CardSubtitle>
          <Button color="primary">Follow </Button>
          &nbsp;&nbsp; <Button  align ="left"color="danger">Mail</Button>
          <CardTitle><code>View Profile</code></CardTitle>
        </CardBody>
    
      </Card>
    </div>
  );
}
}
export default Experts1f;