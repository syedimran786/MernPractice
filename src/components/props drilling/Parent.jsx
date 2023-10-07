import React,{createContext} from 'react';
import A from './A';


export let myContext=createContext()
// export let {Provider,Consumer}=createContext()

export let studentContext=createContext()

console.log(myContext)

const Parent = () => {
    let sname="Sheela";
    return (
        <myContext.Provider value={sname}>
            <studentContext.Provider value={"bye"}>
            <A/>
            </studentContext.Provider>
        </myContext.Provider>
    );
}

export default Parent;
