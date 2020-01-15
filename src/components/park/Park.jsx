import React, { Component } from 'react';
import Land from '../land/Land'
import './Park.css';

class Park extends Component {
    state = {  }
    render() { 


       
      
        return ( <p>
       {this.props.park}
        </p> );
    }
}
 
export default Park;