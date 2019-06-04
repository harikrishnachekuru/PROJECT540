import React, { Component } from 'react';
import {Container,Row,Col} from 'reactstrap';
import Notifications1f from './Notifications/Noifications1f'
import { Grid } from 'react-flexbox-grid';
class  Notification extends Component {
    
    render() { 
        return ( <Grid fluid>
            <Row>
                <Col xs="3"></Col>
                <Col xs="6"><Notifications1f/></Col>


                <Col xs="3"></Col>

                
            </Row>
        </Grid>
  );
    }
}
 
export default Notification ;