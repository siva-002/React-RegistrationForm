import React from 'react'
import { Link } from 'react-router-dom'
import Index from './user/Index'
const Home = () => {
   const login=localStorage.getItem("Login")

  return (
  (login)?
    <div><Index/></div>:
    <Link to="/Login">Login Again</Link>
    
  )
}

export default Home