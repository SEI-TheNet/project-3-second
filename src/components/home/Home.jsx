import React,{Component} from 'react';
import './Home.css';
class Home extends Component {
    render() { 
        return (
            <div className='Home'>
    <div class="page-header">
    <div class="container">
    <div class="row">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    <div class="page-caption">
    <h1 class="page-title">Taste the magic...</h1>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="card-section">
    <div class="container">
    <div class="card-block bg-white mb30">
    <div class="row">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    {/* section-title  */}
    <div class="section-title mb-0">
    <h2 className='p1'>Looking for a great delightful meal at one of the iconic Disneyland restaurants?</h2>
    <h3 className='p1'>We are here to help you enjoy the best experience</h3>
    </div>
    {/* /.section-title  */}
    </div>
    </div>
    </div>
    </div>
    </div>
            </div> 
        );
    }
}
export default Home;