import React, { useState } from 'react';

const UseStateWithObjects = () => {

    let [login,setlogin]=useState({fullname:"",password:""})
   
    let changeLogin=({target:{value,name}})=>
    {
        
        setlogin({...login,[name]:value})
    }
    return (
        <div>
            {console.log("rendered")}
            <h1>Name: {login.fullname}</h1>
            <h1>Password: {login.password}</h1>
            <input type="text" placeholder='Name' onChange={changeLogin} name='fullname'/>
            <hr />
            <input type="password" placeholder='Password' onChange={changeLogin} name='password' />
        </div>
    );
}

export default UseStateWithObjects;
