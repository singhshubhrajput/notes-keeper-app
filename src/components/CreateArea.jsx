import React, { useState } from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [note,setNote]=useState({
        title:"",
        content:""
    });

    function handleChange(event) {
        const { name, value } = event.target;
    
        setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
      }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }

  return (
    <div>
      <form className="create-note">
        <input 
            name="title" 
            onChange={handleChange}
            value={note.title} 
            placeholder="Title" />
        <textarea 
            name="content" 
            onChange={handleChange}
            value={note.content} 
            placeholder="Take a note..." 
            rows="3" />
        <Fab onClick={submitNote}>        {/*Instead of Button, here we are using material ui button Fab*/}
          <AddCircleOutlineIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
