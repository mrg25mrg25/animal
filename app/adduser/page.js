"use client"
import { useState } from "react";


export default function page(){
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");

    const addUser=async()=>{
        let respone = await fetch("http://localhost:3000/api/users",{
            method : "post",
            body:JSON.stringify({name,age,email})
        });
        respone= await respone.json();
        if(respone.success){
            alert("new user added")
        }else{
            alert("ankara")
        }
        console.log(respone);
    }
    return(
        <>
        <h1>add user</h1>
        <input type="text" placeholder="enter name"
        onChange={(e)=>setName(e.target.value)} value={name} />

        <input type="text" placeholder="enter age"
         onChange={(e)=>setAge(e.target.value)} value={age} />

        <input type="text" placeholder="enter email"
         onChange={(e)=>setEmail(e.target.value)} value={email} />

        <button onClick={addUser} >add user</button>
        </>
    )
}