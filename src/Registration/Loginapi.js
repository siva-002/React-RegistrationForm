

const Loginapi = async(formdata) => {

    const getuser={
    method:"POST",
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(formdata)
   }
   try{
    const link="http://localhost:3030/signin"
    const res=await fetch(link,getuser)
    const response=await res.json()
    return response
   }catch(Exception){
        return {status:500,message:"Api Connection Failed Try Again Later"}
   }

}

export default Loginapi