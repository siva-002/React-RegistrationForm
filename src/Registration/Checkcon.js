import React from 'react'

const Checkcon = async() => {
    try{
    const link="http://localhost:3030/"
    const api=await fetch(link)
    const res=await api.json()
    console.log(res.msg)
    }catch(Exception){
        console.log(Exception)
    }
  
}

export default Checkcon