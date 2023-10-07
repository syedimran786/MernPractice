import React, { useEffect, useState } from 'react';

const SimpleEffect = () => {

    let [count,setCount]=useState(0)
    let [count2,setCount2]=useState(0)

    let [name,setname]=useState("Jhon")
  
    useEffect(()=>
    {
        console.log("UseEffect One Called");
        setCount(count)
       
    },[count])

    // useEffect(()=>
    // {
    //     console.log("UseEffect two Called");
    //     setCount(count+1)
       
    // },[count2])


    return (
        <div>
            
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>

            <button onClick={()=>{setCount(count+1)}}>Update</button>
            <button onClick={()=>{setCount2(count2+1)}}>Update2</button>

        </div>
    );
}

export default SimpleEffect;
