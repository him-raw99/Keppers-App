import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { amber } from '@mui/material/colors';
import Zoom from '@mui/material/Zoom';

const color = amber[500];

function Input(props){
    const [ifClicked,setIfClicked]=useState(false);
    const [hook,setHook]=useState({
        title: "",
        content:""
      });
    
    function handleChange(event){
        const {name,value}=event.target;
        setHook((prevValue)=>{
            return({...prevValue,[name]:value})
        });
    }

    function handelClick(){
        setIfClicked(true);
    }

    function passValue(){
        if (hook.title===""||hook.content===""){
            alert("it seems you havent filled all the feilds");
        }else{
            props.pushFunction(hook);
        }
        setHook({
            title: "",
            content:""
          });
        setIfClicked(false);
    }
    return (
        <div className="input-box">
        {ifClicked?<><input type="text" placeholder="Title" className="inputs title" name="title" onChange={handleChange} value={hook.title} />
            <br></br></>:null}
            
            <textarea placeholder="Take a note..." className="inputs" rows={ifClicked?"4":"1"} name="content" onChange={handleChange} onClick={handelClick} value={hook.content} />
            <br></br>
            <Zoom in={ifClicked} timeout={{enter:400}}>
                <Fab className="inputButton" color={color} onClick={passValue}>
                    <AddIcon sx={{ fontSize: 35 }} />
                </Fab>
            </Zoom>
            
        </div>
    );
}

export default Input;