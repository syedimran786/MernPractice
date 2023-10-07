import React from 'react';

const CounterOne = () => {
    console.log("Counter One rendered")

    return (
        <div>
            <h1>PropsOne</h1>
        </div>
    );
}

export default React.memo(CounterOne);
