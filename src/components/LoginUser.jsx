import axios from 'axios';
import React, { useState } from 'react';

const LoginUser = () => {

    let [email,setemail]=useState("");

    let changeemail=({target:{value}})=>
    {
        setemail(value)
    }

    let submitemail=async (e)=>
    {
        e.preventDefault();
        
        let addemail=await axios.post("http://localhost:4500/api/user/loginuser",{email})
        console.log(addemail)
    }

        return (
        <form onSubmit={submitemail}>
            <h1>Login Page</h1>
            <input type="text" onChange={changeemail}/>
            <button>Login</button>
        </form>
    );
}

export default LoginUser;
