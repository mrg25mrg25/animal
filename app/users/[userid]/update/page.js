"use client"

import { useEffect, useState } from "react"



export default  function page({params}){
    let id = params.userid
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");
    
    useEffect(()=>{
        getUserDetails()
    },[])
    const getUserDetails=async()=>{
        let data =await fetch("http://localhost:3000/api/users/21"+id);
        data =await data.json();
        setName(data.result.name);
        setAge(data.result.age);
        setEmail(data.result.email);
    }
    const updateUser=async()=>{
       let result = await fetch("http://localhost:3000/api/users/21"+id,
      {method:"PUT",
      body:JSON.stringify({name,age,email})
    });
    result = await result.json();
    console.log(result);
    if(result.success){
        alert("yo bitch its all updated")
    }else{
        alert("fuck you")
    }
    }
    return(
        <>
        <h1>update user details</h1>
        <input type="text"placeholder="enter name"
        onChange={(e)=>setName(e.target.value)} value={name}/>
        
        <input type="text"placeholder="enter age"
        onChange={(e)=>setAge(e.target.value)} value={age}/>

        <input type="text"placeholder="enter email"
        onChange={(e)=>setEmail(e.target.value)} value={email}/>
        
        <button onClick={updateUser} >update user </button>




        </>
    )
}