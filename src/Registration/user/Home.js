import React, { useEffect, useState } from 'react'

const Home = () => {
  const [user,setuser]=useState([])
   const fetchuser=async()=>{
      const link="http://localhost:3030/gethome"
      try{
        const result=await fetch(link)
        const res=await result.json()
        setuser(res.user)        
      }catch(Exception){
        console.log(Exception.message)
  } 
  }

  useEffect(()=>{
    fetchuser()
  },[])
 
  return (
    <div>
      {user.map((us)=>(
        
          <div key={us.username} className="card mb-3" style={{"maxWidth":"100%"}} >
              <div className="row g-0">
                <div className="col-md-4">          
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{us.username}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
       </div> 
    
    ))}
    </div>
  )
}

export default Home