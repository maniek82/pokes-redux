import React, { Component } from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import CreatePost from './components/CreatePost';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
          <Navbar />
          <Switch>
            <Route path="/create" exact component={CreatePost}/>
            <Route path="/about" exact component={About}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/" exact component={Home}/>
            <Route path="/:post_id" exact component={Post}/>
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
