import React, { Component } from 'react';
import './Nav.css'
import 'bootstrap/dist/css/bootstrap.css';
class Nav extends Component {
    state = {  }
    render() { 
        return (        <div className="Nav">
            {/* <div class="jumbotron"  style={{  
  backgroundImage: "url(" + "https://unsplash.com/photos/6u41g4jhZ6o" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}></div> */}
        <div className="topnav">
          <a className="" href="/">
            Home</a>
          <a href="/Parks">Parks</a>
          <a href="/Exper">Experiences</a>
        </div>
      </div>);
    }
}
export default Nav;