import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import {Card,Row,Col} from 'reactstrap';

//import { connect } from 'react-redux';
import axios from 'axios';
export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeOverview = this.onChangeOverview.bind(this);
    this.onChangePassion = this.onChangePassion.bind(this);
    this.onChangePointOfInterest = this.onChangePointOfInterest.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeStream = this.onChangeStream.bind(this);
    this.onChangeProfession = this.onChangeProfession.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      first_name: '',
      last_name: '',
      phone_number: '',
      passion: '',
      profession: '',
      location: '',
      overview:'',
      stream:'',
      point_of_interest: '',
    }
}

componentDidMount() {
  if(localStorage.usertoken){
  axios.get('http://localhost:4001/api/user/profile/' + jwt_decode(localStorage.usertoken)._id)
      .then(response => {
          this.setState({ 
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            phone_number: response.data.phone_number,
            passion: response.data.passion,
            profession: response.data.profession,
            location: response.data.location,
            overview: response.data.overview,
            stream: response.data.stream,
            point_of_interest: response.data.point_of_interest});
      })
      .catch(function (error) {
          console.log(error);
      })
    }
    else{
      this.props.history.push('/Login');
      alert('Login First');
    }
}

  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value
    });
  }
 
  onChangePhoneNumber(e) {
    this.setState({
      phone_number: e.target.value
    });
  }
  onChangeOverview(e) {
    this.setState({
      overview: e.target.value
    });
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }
  onChangePassion(e) {
    this.setState({
      passion: e.target.value
    });
  }
  onChangeProfession(e) {
    this.setState({
      profession: e.target.value
    });
  }
  onChangeStream(e) {
    this.setState({
      stream: e.target.value
    });
  }
  onChangePointOfInterest(e) {
    this.setState({
      point_of_interest: e.target.value
    });
  }
  
  onSubmit(e) {
    const obj = {
      first_name:this.state.first_name,
      last_name:this.state.last_name,
      overview:this.state.overview,
      passion:this.state.passion,
      point_of_interest:this.state.point_of_interest,
      phone_number:this.state.phone_number,
      stream:this.state.stream,
      location:this.state.location,
      profession:this.state.profession,

    };
    if(localStorage.usertoken){
    axios.post('http://localhost:4001/api/user/add/' + jwt_decode(localStorage.usertoken)._id ,obj)
        .then(res => console.log(res.data));
      }
      else{
        this.props.history.push('/Login');
        //alert('Login First');
      }
    
    this.setState({
        first_name: '',
        last_name: '',
        phone_number: '',
        passion: '',
        profession: '',
        location: '',
       overview:'',
        stream:'',
        point_of_interest: '',
    })
    
  }
render() {
return (
<div className="post-container1">
<br></br>
  <h1 className="post_heading">Edit Your Profile</h1>
 <br></br>
  <form className="form" onSubmit={this.onSubmit}>
  <Row><Col xs>
   <input required type="text" 
   ref={(input) => this.getFirstName = input}
   placeholder="Enter Your First Name" 
   value={this.state.first_name}
   onChange={this.onChangeFirstName}/>&nbsp;
</Col>&emsp;&emsp;&emsp;&emsp;<Col xs>
<input required type="text" 
   ref={(input) => this.getLastName = input}
   placeholder="Enter Your Last Name" 
   value={this.state.last_name}
   onChange={this.onChangeLastName}/> 
<br/></Col>&emsp;&emsp;&emsp;&emsp;
<Col xs>
<input required type="text" 
   ref={(input) => this.getLocation = input}
   placeholder="Enter Your Location" 
   value={this.state.location}
   onChange={this.onChangeLocation}/><br/>
</Col>&emsp;&emsp;&emsp;&emsp;<Col xs>
<input required type="text" 
   ref={(input) => this.getPassion = input}
   placeholder="Enter Your Passion" 
   value={this.state.passion}
   onChange={this.onChangePassion}/><br/></Col>
</Row><br></br>
<Row><Col xs>
<input required type="text" 
   ref={(input) => this.getPointOfInterest = input}
   placeholder="Enter Your Point Of Interest" 
   value={this.state.point_of_interest}
   onChange={this.onChangePointOfInterest}/><br/>
</Col>&emsp;&emsp;&emsp;&emsp;<Col xs>
<input required type="text" 
   ref={(input) => this.getProfession = input}
   placeholder="Add your profession" 
   value={this.state.profession}
   onChange={this.onChangeProfession}/><br/>
</Col>&emsp;&emsp;&emsp;&emsp;<Col xs>
<input required type="text" 
   ref={(input) => this.getStream = input}
   placeholder="Enter Your Stream" 
   value={this.state.stream}
   onChange={this.onChangeStream}/><br/>
</Col>&emsp;&emsp;&emsp;&emsp;<Col xs>

<input required type="number" 
   ref={(input) => this.getPhoneNumber = input}
   placeholder="Enter Your Phone Number" 
   value={this.state.phone_number}
   onChange={this.onChangePhoneNumber}/><br/>

</Col>
</Row>
<br></br>

< textarea required rows="5" 
   ref={(input) => this.getOverview = input}
   cols="28" placeholder="Enter Overview" 
   value={this.state.overview}
   onChange={this.onChangeOverview}/><br /><br />
  
   <button>Update</button>

  </form>
</div>
);
}
}