import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    let [data,setData]=useState([])
    let [isloading,setisloading]=useState(false)
    let [iserror,setiserror]=useState(false)
    let [errorMessage,seterrorMessage]=useState("")

    async function getData()
        {
            try
            {
                let {data}=await axios.get(url);
                setData(data)
                setisloading(false)
                setiserror(false)
            }
            catch(err)
            {
                setisloading(false)
                setiserror(true)
                seterrorMessage(err.message)
                console.log(err)
            }
           
        }

    useEffect(()=>
    {
        setisloading(true)
        getData();
    },[])

return {data,isloading,iserror,errorMessage}
}

export  {useFetch};
