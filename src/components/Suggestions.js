import React from 'react';
import { Card,  CardHeader, CardBody, CardText,Button } from 'reactstrap';
import Avatar from 'react-avatar';
const Example = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>Suggestions</CardHeader>
        <CardBody className="cd">
          <CardText><Avatar  src="https://picsum.photos/400" size="40" round={true} />&emsp;
          hari_cheku&nbsp;{/*<Button outline color="danger">+</Button>*/}</CardText>
          
        </CardBody>
        <CardBody>
          <CardText>
          <Avatar  src="https://picsum.photos/300" size="40" round={true} />&emsp;
  Dinesh&nbsp;{/*<Button outline color="danger">+</Button>*/}</CardText>
          
        </CardBody>
        <CardBody>
          <CardText><Avatar  src="https://picsum.photos/200" size="40" round={true} />&emsp;
          Abhi&nbsp;{/*<Button outline color="danger">+</Button>*/}</CardText>
          
        </CardBody>
        <CardBody>
          {/*<CardText className="cd"><code>View more</code></CardText>*/}
          
        </CardBody>
        
        
      </Card>
    </div>
  );
};

export default Example;