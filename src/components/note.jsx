import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){
    function handleClick(){
        props.deleteFunction(props.id)
    }
    return <div className="note-data">
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <span className="delete-button" onClick={handleClick} ><DeleteIcon /></span>
    </div>;
}

export default Note;