import React, { useContext } from 'react';
import { myContext,studentContext } from './Parent';




const D = () => {

    let myContextData=useContext(myContext)
    let studentContextData=useContext(studentContext)
    
    return (
        <div>
            {/* <myContext.Consumer>
                {(providerData)=>
                {
                    return <Consumer>
                        {
                            (pdata)=>
                            {
                                return <h1>{pdata} {providerData}</h1>
                            }
                        }
                    </Consumer>
                }}
            </myContext.Consumer> */}

            <h1>{studentContextData} {myContextData}</h1>
        </div>
    );
}

export default D;
