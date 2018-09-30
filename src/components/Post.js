import React, { Component } from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions';


class Post extends Component {
    
//         state = { 
//             post: null
//          }
   
// componentDidMount() {
//     let id = this.props.match.params.post_id;
//     axios.get("https://jsonplaceholder.typicode.com/posts/"+id).then(res=> {
//         this.setState({
//             post: res.data
//         })
//         console.log(res)
//     })
// }
handleClick = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push("/");
}
    render() { 
        // const post = this.state.post ? (
            const post = this.props.post ?(
            <div className="row post_card_photo">
            <div className="col s12 m12">
              <div className="card">
                <span className="card-title orange-text center">{this.props.post.title}
                </span>
                <div className="card-image">
                  <img src="https://source.unsplash.com/featured/1200x600?animal"  alt="animal"/>
                  
                  <Link to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">home</i></Link>
                </div>
                <div className="card-content">
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button
                     onClick = {this.handleClick}
                     className="btn red">Delete Post</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
           <div className="center">Loading post...</div> 
        )
        return ( 
            <div className="container home">
               {post}
            </div>
          );
    }
}

 const mapStateToProps = (state, ownProps)=> {
let id = ownProps.match.params.post_id;
return {
    post: state.posts.find(post=>{
        return parseInt(post.id,10)===parseInt(id,10)
    })
}
 }

 const mapDispatchToProps =(dispatch) => {
    return {
        deletePost: (id) => {
            // dispatch({type: 'DELETE_POST',id: id})
            dispatch(deletePost(id)) // from actions folder
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);