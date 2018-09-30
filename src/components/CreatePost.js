import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions';

import {bindActionCreators} from 'redux';

class CreatePost extends Component {
    state = { 
        id: null,
        title: '',
        body:''
     }
    handleChange= (e) => {
       const id = Math.random();
        this.setState({

            [e.target.id]:e.target.value,
            id: id
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state);
        this.setState ({
            content: ''
        })
       
    }

   
    render() { 
        return ( 
            <div className="container">
            <form onSubmit = {this.handleSubmit}className="clear ">
                <h3 className="white-text text-darken-3">Create Project</h3>
                <div className="input-field">
                    <label className="white-text "htmlFor="title">Title</label>
                    <input type="text" 
                    onChange={this.handleChange}
                    placeholder="Post title"
                    id="title" 
                    />
                </div>
                <div className="input-field">
                    <label className="white-text "htmlFor="body">Body</label>
                    <input type="text"
                    onChange={this.handleChange}
                    placeholder="Post body"
                    id="body" 
                    />
                </div>
                
                <div className="input-field">
                   <button className="btn green darken-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
         );
    }
}

 function mapDispatchToProps(dispatch){
    return bindActionCreators({createPost},dispatch)
}

export default connect(null, mapDispatchToProps)(CreatePost);