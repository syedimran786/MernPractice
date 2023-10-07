import axios from 'axios';
import React, { useState } from 'react';

const AddTask = () => {

    let [tname,setTask]=useState("");

    let changeTask=({target:{value}})=>
    {
        setTask(value)
    }

    let submitTask=async (e)=>
    {
        e.preventDefault();
        
        let addtask=await axios.post("http://localhost:4500/api/task/addtask",
        {tname},{headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        }})
        console.log(addtask)
    }

        return (
        <form onSubmit={submitTask}>
            <h1>Add Task</h1>
            <input type="text" onChange={changeTask}/>
            <button>Add</button>
        </form>
    );
}

export default AddTask;
