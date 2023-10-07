import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { useFetch } from './useFetch';

const GitUsers = () => {
    
    let {data,isloading,iserror,errorMessage}=useFetch("https://jsonplaceholder.typicode.com/photos")
   
    return (
        <div>

            {isloading && <Loader/>}
            {/* {iserror && <h1 style={{color:"red"}}>Something Went Wrong</h1>} */}
            {iserror && <h1 style={{color:"red"}}>{errorMessage}</h1>}

            {!isloading && data.map(user=>
                {
                    return <li key={user.id}>
                        <img  src={user.url} alt="" height={"200px"}  width={"200px"} />
                        </li>
                })}
        </div>
    );
}

export default GitUsers;
