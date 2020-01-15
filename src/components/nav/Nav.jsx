import React, { Component } from 'react';
import './Nav.css'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom'
import {Nav} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'
class Nav1 extends Component {
    state = {  }
    render() { 
        return (        <div className="Nav">

        <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/">Taste The Magic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
        <Nav.Link><NavLink to="/Parks">Parks</NavLink></Nav.Link>
        <Nav.Link><NavLink to="/Exper">Experiences</NavLink></Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      
             
              </div>);
    }
}
 
export default Nav1;