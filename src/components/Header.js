import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
//import stu from './Assets/stu.ico'
//import Teknet from './Assets/Teknet.png'
import logofinal from './Assets/logofinal.png';
class Head extends Component {
    state = {  }
    render() { 
        return ( <div   className="section1" >
           <br/><br/><br/><br/>
                    <Image src={logofinal} className="Imag"/>
                    <br/><br/> <h1 className="align">Welcome to Technology Networking!!!</h1><br/><br/><br/>
                    <h1 className="align"><bold>Place where Students have more Oppurtunities to raise the world</bold> </h1>
                    <br/><br/><br/><br/>  <h1 className="needs"><color><b>What our Platform Provides you</b></color></h1><br/><br/><br/><br/>    </div> );
    }
}
 
export default Head;