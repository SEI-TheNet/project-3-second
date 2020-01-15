import React, { Component } from 'react';
import './Land.css';
class Land extends Component {
    state = {
        land:this.props.land,
        dining:[]
      }
      componentDidMount () {
        const land = this.props.match.params.id
        let dining = this.props.location.state.dining
        console.log(dining)
        if(land==="Animation Courtyard" ||land==="World Showcase" ){dining=[]}
        this.setState({ ...this.state,
        land,dining})
       }
    render() { 
        return ( <div> 
            <div class="container">
  <div class="jumbotron">
  <h1>{this.state.land}</h1> 
  </div>
            <br/>
	<div >
            <p>{this.state.dining.map(res=> <blockquote class="quote-card"><p>{res.name}</p></blockquote>)}</p>
          </div> </div>
        </div>  );
    }
}
export default Land;