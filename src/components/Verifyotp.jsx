import axios from 'axios';
import React, { useState } from 'react';

const Verifyotp = () => {
    let [logindata,setlogindata]=useState({email:"",otp:""});

    let changelogindata=({target:{value,name}})=>
    {
        setlogindata({...logindata,[name]:value})
    }

    let submitlogindata=async (e)=>
    {
        e.preventDefault();
        
        let verification=await axios.post("http://localhost:4500/api/user/userverification",logindata)
        localStorage.setItem("token", verification.data.token)
        console.log(verification)
    }

        return (
        <form onSubmit={submitlogindata}>
            <h1>Verify OTP</h1>
            <input type="text" onChange={changelogindata} name="email" value={logindata.email}/>
            <input type="text" onChange={changelogindata} name="otp" value={logindata.otp}/>
            <button>verify</button>
        </form>
    );
}

export default Verifyotp;
