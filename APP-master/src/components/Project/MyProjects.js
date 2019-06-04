import React, { Component } from 'react';
import MyProjectCard from '../Project/Myprojectcard';
import EditComponent from '../Newsfeed/EditComponent';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import jwt_decode from 'jwt-decode';

export default class MyProject extends Component {
  state = { 
    projectarray: [],
    currentProject: {}
   };

  componentDidMount(req, res) {
    axios.get('http://localhost:4001/api/project/'+ jwt_decode(localStorage.usertoken).user_name)
      .then(response => {
        this.setState({ projectarray: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  delete = (id) => {
    axios.get('http://localhost:4001/api/project/delete/' + id)
      .then(res=>{
        const oldProjects = [...this.state.projectarray];
        const newProjects = oldProjects.filter(project => {
          return project._id !== id;
        });

        this.setState({
          projectarray:newProjects
        });
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <h2 className="center">My Projects</h2>
        <div style={{ height: 480, overflow: "auto" }}>
          <InfiniteScroll
            dataLength={this.state.projectarray.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>....</h4>}
          >
        {this.state.projectarray.map((project) => (
          <div key={project.id}>
            {project.editing
              ? <EditComponent project={project} key={project.id} />
              : <MyProjectCard
              project={project}
                key={project.id}
                deleteProject={this.delete}
              />}
          </div>
        ))}
        </InfiniteScroll>
              </div>
      </div>
    );
  }
}


