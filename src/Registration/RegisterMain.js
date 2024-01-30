import React from 'react'
import Registerform from './Registerform'
import { Routes,Route } from 'react-router-dom'
import Loginform from './Loginform'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import Home from './Home';
import { useState } from 'react';
import Checkcon from './Checkcon';
import { useEffect } from 'react';
import Homepage from './Homepage';
const RegisterMain = () => {
  useEffect(()=>{
    Checkcon()
  },[])
  return (
    <div>
     
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/Register" element={<Registerform/>}/>
          <Route path="/Login" element={<Loginform />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
    </div>
  )
}

export default RegisterMain