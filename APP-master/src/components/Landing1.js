import React, { Component } from 'react';
import '../App.css';
import { MDBContainer, MDBRow, MDBCol, } from "mdbreact";
import {Layout,Header,Navigation,Drawer,Content,Grid,Card, Footer,FooterLinkList,FooterSection} from 'react-mdl';
import{Alert,Row,Col} from 'reactstrap';
import stud from './Assets/stud.gif';
import stud1 from './Assets/stud1.gif';
import stud2 from './Assets/stud2.gif';
import {register} from './UserFunctions';
import {Link} from 'react-router-dom';
import reg from './Assets/reg.png';
import Imo from './Assets/Imo.png';
import ino1 from './Assets/ino1.png';
import icon2 from './Assets/icon2.png';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
class Landing1 extends Component {
  constructor() {
    super()
    this.state = {
        user_name: '',
        email: '',
        password: '',
        re_enter: '',
        visible: true

    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDismiss = this.onDismiss.bind(this);

}

onDismiss() {
  this.setState({ visible: false });
}

validateEmail(email){
    
}
onChange (e) {
  this.setState({ [e.target.name]: e.target.value })
  if(e.target.name==='email')
  {
  const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
  const result = pattern.test(e.target.value);
  if(result===true){
    this.setState({
      emailError:false,
      email:e.target.value
    })
  } else{
    this.setState({
      emailError:true
    })
  }
}
}
onSubmit (e) {  
    e.preventDefault()
    const { password,re_enter,user_name,last_name,email,first_name,emailError } =this.state;
    if(user_name === ''){
        alert("enter user name")
   }
   else if(email === ''){
    alert("enter email")
  }
  else if(emailError === true){
    alert("enter valid email")
  }
  else if(password === ''){
    alert("enter password")
  }
  else if(re_enter === ''){
    alert("re-enter password")
  }
  else if(re_enter!==password ){
    alert("password doesn't match");
  }
  else{
    alert('Registered Sucessfully!!');
    const user = {
      
        user_name: this.state.user_name,
        email: this.state.email,
        password: this.state.password,
        re_enter: this.state.re_enter
    }
    if(this.state.password === this.state.re_enter){
    
    register(user).then(res => {
        this.props.history.push(`/login`)
    })}
}}
  render() {
    return (<div>
      <div style={{height: '530px', position: 'relative',color:'white'}}>
    <Layout className="co" >
    <MDBContainer>
       {/*} <Header transparent title="Teknet" style={{color: 'white'}}>
        
            <Navigation >
            <b >  <a  class="#ser" style={{fontSize:'30px'}}>
          </a></b>
            

            </Navigation>
    </Header>*/}
    <MDBRow>
        <MDBCol md="7">
        <div  >
        <br/>
        <br/>     
        <div  style={{fontSize:'30px' }}> Technology Networking</div>
         <div style={{fontSize:'15px'}}>Platform where studens can change the Revolution of Technology</div><br/><br/>
         <MDBRow>
          <MDBCol md="4"> <img  className="Imod" src={Imo}/><div style={{fontSize:'15px'}}>Get Ideas</div></MDBCol>
       <MDBCol md="4"> <img  className="Imod" src={ino1}/><div style={{fontSize:'15px'}}>Make Projects</div></MDBCol>
         <MDBCol md="4"><img className="Imod" src={icon2}/><div style={{fontSize:'15px'}}>Impact World</div></MDBCol>
         </MDBRow>
         </div>
         </MDBCol>
        <MDBCol md="5"> <div>
         &nbsp; 
        <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
          This site is under construction..
      </Alert>
           <div className="row">
               <div className="col-md-8 mt-5 mx-auto">
                   <form noValidate onSubmit={this.onSubmit}>
                       <h1 className="h3 mb-3 font-weight-normal"><b> Register&emsp; <img src={reg} width="40px" alt="reg"/> </b></h1>
                       <div className="form-group">
                       
                           <input required type="text"
                               className="form-control"
                               name="user_name"
                               placeholder="Enter Unique User Name"
                               value={this.state.user_name}
                               onChange={this.onChange} />
                       </div>
                       <div className="form-group">
                          
                           <input required type="email"
                               className="form-control"
                               name="email"
                               placeholder="Enter Email"
                               value={this.state.email}
                               onChange={this.onChange} />
                               {this.state.emailError ? <span style={{color:"red"}}>Please enter valid email address</span>:''}
                       </div>
                       <div className="form-group">
                          
                           <input required type="password"
                               className="form-control"
                               name="password"
                               placeholder="Enter Password"
                               value={this.state.password}
                               onChange={this.onChange} />
                       </div>
                       <div className="form-group">
                          
                           <input required type="password"
                               className="form-control"
                               name="re_enter"
                               placeholder="Confirm Password"
                               value={this.state.re_enter}
                               onChange={this.onChange} />
                       </div>
                       <button type="submit" className="btn btn-lg btn-primary btn-block">
                           Register
                       </button><br/>
                       <div>
                       <h6>
                         Already User? 
                         <b>
                           <Link to="Login" >LOGIN</Link>
                           </b></h6>
                          
                           </div>
                   </form>
               </div>
           </div>
           
       </div></MDBCol>
      </MDBRow>

        <Content />
        </MDBContainer>
    </Layout>
</div>
<div>
<div style={{color:'black',textAlign:'center',fontSize:'30px'}}>What our Platform Provides</div>
<h1 style={{fontSize:'20px',textAlign:'center'}}>Students can make their Projects ,Teams for the Technology purpose</h1><hr/>
</div>
<div id="ser">
 <div style={{textAlign:'center',fontSize:'30px'}}>Our Services</div> 
</div>
<div><Grid>
  
  <MDBCol  size="8" sm="4"><Card>
   <img className="Im" src={stud} alt="image" />
   <div style={{fontSize:'20px',textAlign:'center'}}><b>Make Projects Online</b></div>
   <div style={{fontSize:'15px'}}>Students can Upload their Projects Online in this site to get their Work done and become more Creative in Technology World </div>
   </Card>
  </MDBCol>
  <MDBCol  size="8" sm="4"><Card>
  <img className="Im" src={stud1} alt="image"/>
 <div style={{fontSize:'20px',textAlign:'center'}}> <b>Become Expert</b></div>
   <div style={{fontSize:'15px'}}>Students can become Expert in this site by his advanced skills on projects to meet present Technology </div>
  
  </Card>
  </MDBCol>
  <MDBCol  size="8" sm="4">
  <Card>
  <img className="Im" src={stud2} alt="image"/>
 <div style={{fontSize:'20px',textAlign:'center'}}><b>Build your Team</b></div>
   <div style={{fontSize:'15px'}}>Start where you are.Use what you have.Do what you can. </div>
  
  </Card>
  </MDBCol>
  </Grid>
</div>
<div>
<Footer size="mini">
               
           
 <div>Follow us:&emsp;<i class="fab fa-facebook" style={{height:'10px',width:'10px'}} ></i>&emsp;<i class="fab fa-instagram"></i>&emsp;<i class="fab fa-twitter"></i>&emsp;<i class="fab fa-github"></i></div>

 <div style={{color:'white',textAlign:'center'}}>Copyrights TECHVIE  @2019</div>

</Footer>
  </div>
</div>
    );
  }
}

export default Landing1;
