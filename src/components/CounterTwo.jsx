import React from 'react';

const CounterTwo = () => {
    console.log("Counter Two Rendered")
    return (
        <div>
            <h1>PropsTwo</h1>
        </div>
    );
}

export default React.memo(CounterTwo);
