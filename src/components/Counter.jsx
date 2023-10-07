import React, { useState } from 'react';

const Counter = () => {

    let [count,setcount]=useState(0);

 let updateCount=()=>
 {
    setcount(count+1)
 }
 let updateCountbyto5=()=>
 {
    setcount(5)
 }
    return (
        <div>
            {console.log("Rendered")}
            <h1>Count : {count}</h1>
            <button onClick={updateCount}>click</button>
            <button onClick={updateCountbyto5}>5</button>

        </div>
    );
}

export default Counter;
