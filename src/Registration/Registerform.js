import React, { useState } from 'react'
//import "./style.css"
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';
import Navbar from './Navbar'
const Registerform = () => {
    const [formdata,setformdata]=useState({        
            username:'',
            email:'',
            password:'',       
            confirmpassword:''       
    }
    )
  
    const handlecheck = ()=>{
        if(formdata.password == formdata.confirmpassword){
            return true
        }
        return false
    }
    const handleChange = (e)=>{
       
        setformdata({...formdata,[e.target.name]:e.target.value})
       
    }

    const handleSubmit =async(e)=>{
        e.preventDefault();
       const insertoperation={
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formdata)
       }


       if(handlecheck()){
                try{ 
                        const apilink="http://localhost:3030/signup"
                        const res=await fetch(apilink,insertoperation)
                        const result=await res.json()
                     console.log(result)
                        if(result.code===11000){
                            toast.info("Username/Email Already Exists",{
                                autoClose:2000,
                                position:toast.POSITION.CENTER
                        })}
                        else if(result.status===200){
                            toast.success("Registration Success",{
                            autoClose:2000,
                            position:toast.POSITION.CENTER
                        })
                        }else{
                        toast.error("Registration Failed",{
                            autoClose:2000,
                            position:toast.POSITION.CENTER
                        })
                     
                    }
           
                    }catch(e){
                        toast.error("Error in Api connection",{
                            autoClose:2000,
                            position:toast.POSITION.TOP_CENTER
                        })
                    }
                    finally{
                   
                        setformdata({
                            username:'',
                            email:'',
                            password:'',
                            confirmpassword:''
                        })
                 
                    }
    }
    else{
        toast.info("Passwords don't match",{
            autoClose:2000,
            position:toast.POSITION.TOP_RIGHT
    })

}
    }
  return (
    <>
       <Navbar/>
    <div className='container con mt-5' >
        <form onSubmit={handleSubmit} className='col-10 m-auto' style={{maxWidth:"350px",marginTop:"5%",padding:"20px",boxShadow:"10px 5px 10px 2px black",backgroundImage: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"}}>
            <h3>Register</h3>
            <div className=''>
            <label className='form-label' >Enter  Username :</label> <input className='form-control'  required type="text" name="username" onChange={handleChange} value={formdata.username}/>
            </div>
            <div>
            <label  className='form-label'>Enter Email :</label> <input className='form-control' required type="text" name="email" onChange={handleChange} value={formdata.email}/>
            </div>
            <div>
            <label  className='form-label'>Enter Password :</label> <input className='form-control' required type="password" name="password" onChange={handleChange} value={formdata.password}/>
            </div>
            <div>
            <label  className='form-label'>Confirm Password :</label> <input className='form-control' required type="password"  name="confirmpassword" onChange={handleChange} value={formdata.confirmpassword}/>
            </div>
            <h6 className='mt-3'>Already have an account? <Link to="/Login">Login</Link> </h6>
            <div className=' mt-3 '>
            <button type='submit' className='btn btn-success '>Register</button>&nbsp;
            <button type='reset' className='btn btn-danger '>Reset</button>
            </div>
            <ToastContainer/>
        </form>

    </div>

    </>
  )
}

export default Registerform