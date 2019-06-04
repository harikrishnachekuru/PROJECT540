import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class EditComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescrition = this.onChangeDescrition.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      post_title: '',
      post_description: ''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/api/update/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                post_title: response.data.post_title, 
                post_description: response.data.post_description });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangeTitle(e) {
    this.setState({
      post_title: e.target.value
    });
  }
  onChangeDescrition(e) {
    this.setState({
      post_description: e.target.value
    })  
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      title: this.state.post_title,
      description: this.state.post_description
    };
    axios.post('http://localhost:4000/api/title/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
// handleEdit = (e) => {
//   e.preventDefault();
//   const newTitle = this.getTitle.value;
//   const newMessage = this.getMessage.value;
//   const data = {
//     newTitle,
//     newMessage
//   }
//   this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
// }
render() {
return (
<div key={this.props.post.id} className="post">
  <form className="form" onSubmit={this.onSubmit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.post.title} placeholder="Enter Post Title"
    value={this.state.post_title}
    onChange={this.onChangeTitle} /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage = input}
    defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" 
    value={this.state.post_description}
    onChange={this.onChangeDescrition}/><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);