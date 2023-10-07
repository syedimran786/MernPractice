import React from 'react';

const Child = (props) => {
let cdata="Welcome";
    console.log(props.pFunc)


    props.pFunc(cdata)
    return (
        <div>
            <h1>Child</h1>
            <h3>My Name is {props.name}</h3>
        </div>
    );
}

export default Child;
