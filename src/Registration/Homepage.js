import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import bgimg from './images/bg.jpg'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Homepage = () => {
  return (
    <>
    <Navbar/>
    <div className='col-10 col-md-8 mx-auto' style={{marginTop:"10%",maxWidth:"900px"}}>
        <div class="card mb-3" style={{padding:"20px",boxShadow:"10px 5px 10px 2px black",backgroundImage: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"}}>
    <div class="row g-0">
        <div class="col-md-4">
        <img src={bgimg} class="" alt="not found" style={{objectFit:"contain",width:"200px"}}/>
        </div>
        <div class="col-md-8">
            
        <div class="card-body">
            <h5 class="card-title">Social Media Website And Application</h5>
            <p class="card-text">This project aims to create a dynamic social media platform connecting users and fostering communities. We'll focus on user experience, thorough research, and strategic planning to build a seamless website and application.
</p>
            <p class="card-text">Click <Link to="/Register">here</Link> to register</p>
        </div>
        </div>
    </div>
    </div>
    
    </div>
    </>
  )
}

export default Homepage