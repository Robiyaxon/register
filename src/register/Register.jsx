import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import style from "./Register.module.css"
import { useNavigate } from 'react-router-dom';
export const Register = () => {
    const [fullName, setFullName]=useState("")
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [phone, setPhone]=useState("")  
       const navigate = useNavigate();
    function signUp() {
      let item={fullName,username,password,phone};
    
    fetch("https://online-excel-heroku.herokuapp.com/auth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify(item),
       
      });  
      if(fullName!=="" && username!=="" &&password!=="" && phone!==""){
      navigate("home")
      } 
 
    }
  return (
    <div className={style.Register}>
        <h1>Register Page</h1>
        <input value={fullName} placeholder="Enter your full Name" onChange={(e)=>setFullName(e.target.value)} type="text"  />
        <br />
        <input type="text" placeholder="Enter your Username"  onChange={(e)=>setUsername(e.target.value)} value={username}  /> <br />
        <input value={password} placeholder="Enter your Password"  onChange={(e)=>setPassword(e.target.value)} type="password"  />
        <br />
       
        <input value={phone}  placeholder="Enter your Phone"  onChange={(e)=>setPhone(e.target.value)} type="number"  />
        <br />
        <button onClick={signUp}>Sign Up</button>
    </div>
  )
}
