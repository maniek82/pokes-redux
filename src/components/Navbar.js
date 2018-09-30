import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';



const Navbar = (props) => {

    
    return ( 
        <nav className="nav-wrapper red darken-3">
            <div className="container"> 
              <Link to="/" className="brand-logo">Poke's time</Link>
              <ul className="right">
                  <li> <NavLink to="/create">Create Post</NavLink></li>
                  <li><Link to="/">Home</Link></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  
              </ul>
            </div>
        </nav>
     );
}
 
export default withRouter(Navbar);