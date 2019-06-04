import React, { Component } from 'react';
import {Card,CardBody,CardText,Row,Col} from 'reactstrap';
import { FilePond } from 'react-filepond';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dateFormat from 'dateformat';
import { WithContext as ReactTags } from 'react-tag-input';
import Technologies from '../Project/Technologies';
import './TechTags.css';


const suggestions = Technologies.map((technology) => {
  return {
    id: technology,
    text: technology
  }
})

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];


class UploadProject extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescrition = this.onChangeDescrition.bind(this);
        this.onChangeTechnology = this.onChangeTechnology.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleTagClick = this.handleTagClick.bind(this);
    
        this.state = {
          project_title: '',
          project_description: '',
          project_technology:'',
          project_category:'',
          user_name:'',
          date:'',
          tags: [{ id: 'Angular', text: 'Angular' }, { id: 'React', text: 'React' }],
          suggestions: suggestions,
          userarray:[],
          imageUrl:''

        }
      }
    
    
      onChangeTitle(e) {
        this.setState({
            project_title: e.target.value
        });
      }
      onChangeDescrition(e) {
        this.setState({
            project_description: e.target.value
        })  
      }
      onChangeTechnology(e) {
        this.setState({
            project_technology: e.target.value
        });
      }
      onChangeCategory(e) {
        this.setState({
            project_category: e.target.value
        })  
      }
    
      handleDelete(i) {
        const { tags } = this.state;
        this.setState({
          tags: tags.filter((tag, index) => index !== i),
        });
      }
    
      handleAddition(tag) {
       this.setState(state => ({ tags: [...state.tags, tag] }));
      }
    
      handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        // re-render
        this.setState({ tags: newTags });
      }
    
      handleTagClick(index) {
        console.log('The tag at index ' + index + ' was clicked');
      }

      onSubmit(e) {
        const obj = {
          title: this.state.project_title,
          description: this.state.project_description,
          category:this.state.project_category,
          technologies_used: this.state.project_technology,
          user_name: jwt_decode(localStorage.usertoken).user_name,
          date: dateFormat(new Date()),
          imageUrl: this.state.userarray.imageUrl,

        };
        axios.post('http://localhost:4001/api/project/add', obj)
            .then(res => console.log(res.data));
        
        this.setState({
          post_title: '',
          post_description: '',
          project_technology:'',
          project_category:'',
          user_name:'',
          date:'',
          imageUrl: ''

        })
      }

      componentDidMount(){
        axios.get('http://localhost:4001/api/user/profile/' + jwt_decode(localStorage.usertoken)._id)
          .then(response => {
            this.setState({ userarray: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }

    render() { 
      const { tags, suggestions } = this.state;
        return ( <div style={{scrollMarginBlockEnd:'10px'}}>
           
                    <form className="form" onSubmit={this.onSubmit}>
                    <h1 className="post_heading">Create A Project</h1>
                    <input required type="text"
                    ref={(input) => this.getTitle = input} 
                    placeholder="Enter Project Name here"
                    value={this.state.project_title}
                    onChange={this.onChangeTitle} /><br/>

                    <input required type="text" 
                    ref={(input) => this.getCategory = input}
                    placeholder="Enter which category of Project" 
                    value={this.state.project_category}
                    onChange={this.onChangeCategory}/><br/>

                    <textarea required required rows="2" 
                    ref={(input) => this.getMessage = input} cols="20" 
                    placeholder="Enter Project Description" 
                    value={this.state.project_description}
                    onChange={this.onChangeDescrition}/><br/>  
                   
                    <input required type="text" 
                    ref={(input) => this.getTitle = input}
                    placeholder="Enter Technologies Used For Project"
                    value={this.state.project_technology}
                    onChange={this.onChangeTechnology}/><br/>  

                  <ReactTags
                    tags={tags}
                    suggestions={suggestions}
                    delimiters={delimiters}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    handleTagClick={this.handleTagClick}/>
                  
                   {/*<Row><Col xs="5"><label><h5><b>Browse Files here:</b></h5></label></Col> 
                  <Col xs="7"> <FilePond allowMultiple={true}/></Col> </Row>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
               <Row>  <button>Submit</button></Row> </form>
               
        </div> );
    }
}
 
export default UploadProject;