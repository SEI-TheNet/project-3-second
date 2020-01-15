import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
// import Park from './components/park/Park'
import Land from './components/land/Land'
import Parks from './components/parks/Parks'
import Exper from './components/experience/Exper'
// import Dining from './components/dining/Dining'
import axios from 'axios';
class App extends React.Component{
 state ={
   parks:[]
 }
  componentDidMount() {
    // axios
axios.get(`https://disneyparksapi.firebaseio.com/.json`)
.then(res => {
let parks = res.data.orlando.parks;
parks = parks.filter(par => parks.indexOf(par)<4);
this.setState({ parks });
})
} 
render(){
  return (
    <div className="App">
 <Route path='/' component={ Nav }/>
 <Route exact path='/project-3-second' component={ Home }/>
 <Route exact path='/Parks'  render={() => <div className="container-fluid">{this.state.parks.map(res => <Parks parks={this.state.parks} park={res.name} lands={res.lands} ind={this.state.parks.indexOf(res)}/>)}</div>} />
 <Route exact path='/lands/:id'  render={(props) =>  <Land {...props} land={props.id}/>}/>
 <Route exact path='/Exper' component={ Exper }/>
{/* 
<Experince/> */}
    </div>
  );
}}
export default App;