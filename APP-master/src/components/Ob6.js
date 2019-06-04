import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import stud2 from './Assets/stud2.gif';
import {Card,CardTitle,CardText,CardActions} from 'react-mdl';
import {Button} from 'reactstrap';

class Ob4 extends Component {
    state = {  }
    render() { 
        return (<div><Card shadow={0} style={{width: '520px', height: '520px', margin: 'auto'}}>
        <CardTitle expand style={{color: '#fff'}}><Image  src={stud2} className="Imag1"/></CardTitle> 
        <CardText>
          <h1 style={{textAlign:'center'}}>  <code><h1>Build your Team</h1></code> </h1>
          <p style={{textAlign:'center'}}><b>Students can be Marketed here</b></p>
        </CardText>
        <CardActions border>
        <Button style={{textAlign:'centre'}} color="danger" ><b style={{textAlign:'center'}}>
         MORE DETAILS....</b></Button>
        </CardActions>
    </Card></div>  );
    }
}
 
export default Ob4;