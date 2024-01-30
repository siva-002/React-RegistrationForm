import React, { useState } from 'react'
import Loginapi from './Loginapi'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
const Loginform = () => {
  
    const nav=useNavigate()
    const [formdata,setformdata]=useState({
        email:'',password:''
    })
    const handleChange =(e)=>{
        setformdata({...formdata,[e.target.name] : e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        const result=await Loginapi(formdata)
        console.log(result)
        if(result.status===200){
            localStorage.setItem("Login",true);
            toast.success("Login Success")
        
         
            setTimeout(()=>{
                nav("/Home")
            },3000)
        }else if(result.status===401){
            toast.error("Invalid Email/Password",{
                autoClose:2000,
                position:toast.POSITION.TOP_RIGHT
            })
        }else{
            toast.error("Error in API connection Try again Later",{
                autoClose:2000,
                position:toast.POSITION.TOP_RIGHT
            })
        }
      
   
     
    }
  return (
    <>
    <Navbar/>
    <div className='container d-flex ' style={{marginTop:"5%"}}>

        <form className='col-12 mt-5 m-auto' onSubmit={handleSubmit} style={{maxWidth:"300px",padding:"20px",boxShadow:"10px 5px 10px 2px black",backgroundImage: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"}}>
      
             <h3>Login</h3>
            <label className='form-label'>Enter Email</label><input required type="email" name="email" className='form-control' onChange={handleChange}/>
            <label className='form-label'>Enter Password</label><input required type="password" name="password" className='form-control' onChange={handleChange}/>
            <h6 className='mt-3'>Don't have an account? <Link to="/Register">Register</Link> </h6>
            <button className='btn btn-primary mt-3'>Login</button>&nbsp;&nbsp;
            <button type='reset' className='btn btn-danger mt-3'>Reset</button>
            <ToastContainer />
        </form>
    </div>
    </>
  )
}

export default Loginform