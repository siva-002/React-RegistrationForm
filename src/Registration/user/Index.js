import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Contact from './Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserCircle,faFire,faPhone } from '@fortawesome/free-solid-svg-icons';
const Index = () => {
  return (

    <div className='container col-md-6 offset-md-3'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
             <h1 className="navbar-brand  "><FontAwesomeIcon icon={faFire} size={'2x'} /> Chat</h1>
            <ul className="nav nav-pills mb-3 mt-2 " id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><FontAwesomeIcon icon={faHome} size={'1x'} /></button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><FontAwesomeIcon icon={faUserCircle} size={'1x'} /></button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><FontAwesomeIcon icon={faPhone} size={'1x'} /></button>
                </li>
            </ul>
        </div>
        </nav>


        <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                    <Home/>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                <Profile/>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                <Contact/>
            </div>
      </div>
    </div>
 
  )
}

export default Index