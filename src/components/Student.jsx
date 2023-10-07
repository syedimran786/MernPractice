
import React from 'react'

import PropTypes from 'prop-types';


 const Student = (props) => {
    console.log(props)

    
    return (
        <div>
            {/* <h1>Name: {name}</h1>
            <img src={imgUrl} height={"300px"} width={"200px"} alt='No Image Supplied'/>
            <h3>Age: {age}</h3>
            <h5>Dept: {dept}</h5> */}
            {props.children}
            <hr />
        </div>
    )
}

export default Student