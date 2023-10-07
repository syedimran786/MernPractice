import React, { useCallback, useMemo, useState } from 'react';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';

const ParentCounter = () => {
    let [count1,setCount1]=useState(0)
    let [count2,setCount2]=useState(0)

    let updateCount1=()=>{
        setCount1(count1+1)
    }

    let updateCount2=()=>{
        setCount2(count2+1)
    }
    
    let dummyFunc=useCallback(()=>
    {
        console.log("Dummy Func")
    }, [count1])
    




    console.log("Parent rendered")
    return (
        <div>
            <h1>Count1: {count1}</h1>
            <CounterOne/>
            <button onClick={updateCount1}>update1</button>
            <hr />
            <h1>Count2: {count2}</h1>
            <CounterTwo func={dummyFunc}/>
            <button onClick={updateCount2}>update2</button>
        </div>
    );
}

export default ParentCounter;
