import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserCircle,faFire,faAppleAlt, faPen, faArrowAltCircleRight, faSignIn, faUserEdit, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import 'poppins-font';

const Navbar = () => {
  const linkstyle={
    color:"white",
    fontSize:"1.3em"
  }
  const font={
    fontFamily:"poppins",
    color:"white",
    
  }
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary " style={font}>
  <div className="container-fluid  " style={{backgroundImage:" linear-gradient(to top, #30cfd0 0%, #330867 100%)",minHeight:"60px",maxWidth:"100vw"}}>
  <div className='navbar-brand' style={{color:"white"}}> <FontAwesomeIcon icon={faFireFlameCurved} size='2x' style={{color:"rgb(255,100,0)"}}/> <span style={{fontSize:'1.3em'}}>Social Media</span></div>
  <button className="navbar-toggler ms-auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
    
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link style={linkstyle} className="nav-link"  to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
        </li>
        <li className="nav-item">
          <Link style={linkstyle} className="nav-link" to="/Register"><FontAwesomeIcon icon={faUserEdit}/> Register</Link>
        </li>
        <li className="nav-item">
          <Link style={linkstyle} className="nav-link" to="/Login"><FontAwesomeIcon icon={faSignIn}/> Login</Link>
        </li>
      </ul>

    </div>
  </div>

</nav>
    </>
  )
}

export default Navbar