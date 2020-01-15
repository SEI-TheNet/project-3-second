import React,{Component} from 'react';
import axios from 'axios';
import './Parks.css';
import Park from '../park/Park'
import Land from '../land/Land'
import {Link} from 'react-router-dom'
class Parks extends Component {
  constructor(props){
    super(props)
    this.state = {  
        parks:this.props.parks,
        park:this.props.park,
        lands:this.props.lands,
        ind:this.props.ind,
        visible:false
     }}

showLands= () => { 

this.setState({ ...this.state,visible: !this.state.visible})

}
    render() { 
      // <li><h4>{res.name}</h4></li>
      let showHide =""
      if(this.state.visible){
      showHide = <ul>{this.state.lands.map((res)=><Link to={{
        pathname: `/lands/${res.name}`,
        state: {
          dining: res.dining
        }
      }}><h3>{res.name}</h3></Link>)}</ul>
      
     }
     else { showHide= ""

   }
 
  return ( <div >
 
     {/* <h1 onClick={this.showLands} ><Park park={this.state.park}/></h1> */}
  
  	<div className={`col-xl-3 col-lg-3 col-md-3 col-sm-3 project project-${this.state.ind} wow animated animated3 fadeInLeft parks-container`}>
    	<div onClick={this.showLands} className="project-hover" >
      
  
            <hr />
     
        </div>
        <div  className="new">
        <h1  ><Park park={this.state.park}/></h1>
        </div>
        {showHide}
    </div>
    
  </div> );
    }
}
 
export default Parks;