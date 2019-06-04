import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Landing1';
//import Profile from './components/Profile'
import Home from './components/Home';
import Projects from './components/Projects'
import Profiles from './components/Profiles';
import EditProfile from './components/EditProfile';

import Landing1 from './components/Landing1';

import Notification1f from './components/Notifications/Noifications1f';
import EditComponent from './components/Newsfeed/EditComponent';
import Deactivate from './components/Account Settings/Deactivate';
import Change from './components/Account Settings/Change';






class App extends Component {
  render () {
    return (
      <Router>
        
        <div className="App">
        
        <Navbar/>
          <Route exact path="/" component={Landing1} />
          <Route exact path="/login" component={Login} />
          
          <div>
         
            <Route exact path="/Register" component={Register} />
            <Route path='/Home' component={Home}/>
            {/* <Route exact path="/profile" component={Profile} /> */}
            <Route exact path="/projects" component={Projects}/>
            
            <Route path='/Notification1f' component={Notification1f}></Route>
            <Route path='/Profiles' component={Profiles}></Route>
            <Route path='/EditProfile' component={EditProfile} ></Route>
            <Route path='/EditComponent' component={EditComponent}></Route>
            <Route path='/Deactivate' component={Deactivate}></Route>
            <Route path='/Change' component={Change}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
