import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Form,FormControl,Navbar,NavbarBrand,Image,Nav}from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import TLog from './Assets/TLog .png';
class Navbar1 extends Component {
    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render ()  {var mystyle={
        color:'white',
      } 
        const loginRegLink = (
            <ul className="md-auto" navbar>
             <li className="nav-item">
                            <Link to="/" className="nav-link" style ={{color:'white',fontFamily:'georgia'}}>
                               <img src={TLog} width="100px" height="25px" alt="logo"></img>
                            </Link>
                        </li>
              {/*  <li className="nav-item">
                
                    <Link to="/login" className="nav-link" style ={{color:'white',fontFamily:'georgia',fontsize:'60px'}}>
                      <Fade top big cascade>
                 Login </Fade>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link" style ={{color:'white',fontFamily:'georgia',fontsize:'60px'}}>
                       <Fade top big cascade><Row><Col xs="2"> </Col><Col xs="2">
                     Register </Col></Row></Fade>
                    </Link>
        </li>*/}
            </ul>
        )

        const userLink = (
            <ul  className="ml-auto" navbar>
                <li className="nav-item">
                    <Link to="/Home" className="nav-link">
                    Home
                    </Link>
                </li>
                {/*<li className="nav-item">
                    <Link to="/Companies" className="nav-link">
                    Experts
                    </Link>
                 </li>*/}
                <li className="nav-item">
                    <Link to="/Projects" className="nav-link">
                    Projects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Profiles" className="nav-link">
                    Profile
                    </Link>
                </li>
               {/* <li className="nav-item">
                    <Link to="/Notifications" className="nav-link">
                    Notifications
                    </Link>
                </li>*/} 
                <li >

        <Nav style={mystyle}  >        <UncontrolledDropdown direction="left"  style={mystyle} >
      <DropdownToggle   style={mystyle} caret color="#9400d3">
        
      </DropdownToggle>
      <DropdownMenu  style={mystyle}>
      <DropdownItem style={{color:'black',fontSize:'20px',fontFamily:'georgia'}}><b>Settings</b> </DropdownItem>
      <hr color="#9400D3"/>
      <Link to="/Change"> <DropdownItem >Change Password</DropdownItem></Link>
       <Link to="/Deactivate"> <DropdownItem >Deactivate My Account</DropdownItem></Link>
        <DropdownItem>Terms and conditions</DropdownItem><hr color="#9400d3"/>
        <DropdownItem > <a href="" onClick={this.logOut.bind(this)} className="nav-link" style={{color:'black'}}>
                        Logout
                    </a></DropdownItem>

        

      </DropdownMenu>
    </UncontrolledDropdown></Nav></li>
               </ul>
               
        )

        return (
            <div>
            <nav  style={{backgroundColor:'#347fd6'}}  className="navbar navbar-expand-lg navbar-dark"   >
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbar1">
                    <ul className="navbar-nav">
                       {/* <li className="nav-item">
                            <Link to="/profile" className="nav-link" style ={{color:'white',fontFamily:'georgia'}}>
                               <Fade top big cascade> Tech Net</Fade>
                            </Link>
        </li>*/}
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
            </div>
        )
    }
}

export default withRouter(Navbar1)