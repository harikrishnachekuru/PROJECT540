import React, { Component } from 'react';
//import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component'
export default class AllPost extends Component {


  state = { 
    postarray: [],
    currentPost: {}
   };

  componentDidMount(req, res) {
    axios.get('http://localhost:4001/api/')
      .then(response => {
        this.setState({ postarray: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  render() {
    return (
      <div>
        <h1 className="post_heading">All Posts</h1>
        <div style={{ height: 450, overflow: "auto" }}>
          <InfiniteScroll
            dataLength={this.state.postarray.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>No More Posts To Show....</h4>}
          >
        {this.state.postarray.map((post) => (
          <div key={post.id}>
            {post.editing
              ? <EditComponent post={post} key={post.id} />
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


