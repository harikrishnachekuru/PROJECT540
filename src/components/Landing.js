import React, { Component } from 'react'
import Footer from './Footer';
import Ob1 from './Ob1';
import Ob2 from './Ob2';
import Ob3 from './Ob3';


import Header1 from './Header1';

class Landing extends Component {
    render () {
        return (
            <div className="wid">  <Header1/> 
            <Ob1/>
            <Ob2/>
            <Ob3/>
            <Footer/>
    
             </div> 
        )
    }
}

export default Landing