import React, { Component } from 'react';
import ProjectsCard from './ProjetsCard';
import EditComponent from '../Newsfeed/EditComponent';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component'

export default class Allpost extends Component {
  state = { 
    projectarray: [],
    currentProject: {}
   };

  componentDidMount(req, res) {
    axios.get('http://localhost:4001/api/project/get')
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
        <h1 className="post_heading">All Projects</h1>
        <div style={{ height: 430, overflow: "auto" }}>
          <InfiniteScroll
            dataLength={this.state.projectarray.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>No More Posts To Show....</h4>}
          >
        {this.state.projectarray.map((project) => (
          <div key={project.id}>
            {project.editing
              ? <EditComponent project={project} key={project.id} />
              : <ProjectsCard
              project={project}
                key={project.id}
                deleteproject={this.delete}
              />}
          </div>
        ))}
        </InfiniteScroll>
              </div>
      </div>
    );
  }
}


