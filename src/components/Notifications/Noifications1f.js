import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardHeader>Notifications</CardHeader>
          <CardBody>User1 Commented on your Post<code>1min ago</code></CardBody>
          <CardBody>User2 Commented on your Post <code>2min ago</code></CardBody>
          <CardBody>User3 Commented on your Post<code>3min ago</code></CardBody>

        
        </CardBody>
      </Card>
      </div>)
}
export default Example;