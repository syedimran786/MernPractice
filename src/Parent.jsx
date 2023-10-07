import React from 'react';
import Child from './Child';

const Parent = () => {

    let name="Syed";

    let getDataFromChild=(childData)=>
    {
        console.log(childData)
    }
    return (
        <div>
            <h1>Parent</h1>
            <hr />
            <Child name={name} pFunc={getDataFromChild}/>
            <hr />

        </div>
    );
}

export default Parent;
