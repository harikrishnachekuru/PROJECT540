import React, { Component } from 'react';
import Post from './mypost';
import EditComponent from './EditComponent';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import InfiniteScroll from 'react-infinite-scroll-component'
export default class MyPosts extends Component {


  state = { 
    postarray: [],
    currentPost: {}
   };

  componentDidMount(req, res) {
    axios.get('http://localhost:4001/api/' + jwt_decode(localStorage.usertoken).user_name)
      .then(response => {
        this.setState({ postarray: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  delete = (id) => {
    axios.get('http://localhost:4001/api/delete/' + id)
      .then(res=>{
        const oldPosts = [...this.state.postarray];
        const newPosts = oldPosts.filter(post => {
          return post._id !== id;
        });

        this.setState({
          postarray:newPosts
        });
      })
      .catch(err => console.log(err))
  }
  /*edit = (id) => {this.props.history.push(`/EditComponent`)}*/
  render() {
    return (
      <div>
        <h1 className="post_heading">My Posts</h1>
        <div style={{ height: 480, overflow: "auto" }}>
          <InfiniteScroll
            dataLength={this.state.postarray.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>....</h4>}
          >
        {this.state.postarray.map((post) => (
          <div key={post.id}>
            {post.editing
              ? <EditComponent post={post} key={post.id} Edit={this.edit} />
              : <Post
                post={post}
                key={post.id}
                deletePost={this.delete}
              />}
          </div>
        ))}
          </InfiniteScroll>
              </div>
      </div>
    );
  }
}


