import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import stud from './Assets/stud.gif';
import {Card,CardTitle,CardText,CardActions} from 'react-mdl';
import {Button} from 'reactstrap';
class Ob4 extends Component {
    state = {  }
    render() { 
        return (<div><Card shadow={0} style={{width: '520px', height: '520px', margin: 'auto'}}>
        <CardTitle expand style={{color: '#fff'}}><Image  src={stud} className="Imag1"/></CardTitle> 
        
        <CardActions>
         
        
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <Button style={{textAlign:'center'}} color="danger" ><b style={{textAlign:'center'}}>
         Get Mentored</b></Button> </CardActions>
    </Card></div>  );
    }
}
 
export default Ob4;