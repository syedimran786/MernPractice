import React from 'react';
import { useFetch } from './useFetch';
import Loader from './Loader';

const GetProducts = () => {

    let {data,isloading,iserror,errorMessage}=useFetch("https://fakestoreapi.com/products")
    return (
        <div>
            
            {isloading && <Loader/>}
            {/* {iserror && <h1 style={{color:"red"}}>Something Went Wrong</h1>} */}
            {iserror && <h1 style={{color:"red"}}>{errorMessage}</h1>}

            {!isloading && data.map(user=>
                {
                    return <li key={user.id}>
                        <img  src={user.image} alt="" height={"200px"}  width={"200px"} />
                        </li>
                })}
        </div>
    );
}

export default GetProducts;
