import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Mypost from '../Newsfeed/Myposts';
import MyProjects from '../Project/MyProjects';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      userarray: []
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  async componentDidMount() {
    axios.get('http://localhost:4001/api/user/profile/' + jwt_decode(localStorage.usertoken)._id)
    .then(response => {
      this.setState({ userarray: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Feed
            </NavLink>
          </NavItem>
         {/*} <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Info  
            </NavLink>
    </NavItem>*/}
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
            My Projects 
            </NavLink>
          </NavItem>
           {/*<NavItem>
           <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
             >
              Payments
            </NavLink>
           </NavItem>*/}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12"><br/>
                <h4><Mypost/></h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
          <Row>
              <Col sm="12"><br/>
              <form>
                  <h4>
                    OverView 
                  </h4>                 
                    <p>{this.state.userarray.overview}</p>
              </form><br/>
              <form>
                <h4>Stream</h4>
                <h6>{this.state.userarray.stream}</h6><br/>

              </form>
              <form>
                <h4>Location</h4>
                <h6>{this.state.userarray.location}</h6><br/>
                
              </form>
              </Col>
            </Row>
          </TabPane>  
            <TabPane tabId="3">
            <Row>
              <Col sm="12"><br/>
                <MyProjects/>
              </Col>
            </Row>           
          </TabPane>
        </TabContent>
      </div>
    );
  }
}