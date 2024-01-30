import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserCircle,faFire,faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import 'poppins-font';

const Navbar = () => {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary" >
  <div class="container-fluid" style={{background:"rgba(0,255,200,0.2)",height:"60px"}}>
    <Link to="/" class="navbar-brand" style={{color:"brown",fontSize:"25px",fontFamily:"poppins",fontWeight:"bold"}}><FontAwesomeIcon icon={faFire} size={'2x'} style={{color:"red",fontSize:"35px"}}/> Social Media Website And Application</Link> 
   
  </div>
</nav>
    </>
  )
}

export default Navbar