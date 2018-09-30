import React,{Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect} from 'react-redux';


class Home extends Component{

// state = {
//     posts: []
// }

// componentDidMount() {

    // axios.get('https://jsonplaceholder.typicode.com/posts').then(response=> {
    //     console.log(response)
    //     this.setState({
    //         posts: response.data.slice(0,20)
    //     })
    // })
// }

render() {

// const {posts} = this.state;
const { posts} = this.props;

const postsList = posts.length ? (
posts.map((post)=> {
    return (

            <div key={post.id} className="post card">
              <img src={Pokeball} alt="pokeball"/>
                <div className="card-content">
                <Link key={post.id} to={`/${post.id}`}>
                    <span className="card-title orange-text">{post.title}</span>
                </Link>
                    <p>{post.body}</p>
                </div>
            </div>
    )
})
): (
    <div className="center">No posts yet</div>
)

    return ( 
        <div className="container home">
            <h4 className="center">Home</h4>
            
            {postsList}
        </div>
     )
    }
}
 const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
 }

export default connect(mapStateToProps)(Home);
//return hoc wrapes home with ability to cennect to store