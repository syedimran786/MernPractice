import React, { useState } from 'react';
import SimpleEffect from './SimpleEffect';

const Main = () => {

    let [toggle,setToggle]=useState(true);

    let changeToggle=()=>
    {
        setToggle(!toggle)
    }
    return (
        <div>
            {toggle && <SimpleEffect/>}
            {/* <button onClick={changeToggle}>{toggle?"Remove":"Add"}</button> */}
        </div>
    );
}

export default Main;
