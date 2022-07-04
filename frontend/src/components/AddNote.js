import React, { useContext, useState } from 'react';
import NoteContext from '../contexts/notes/noteContext';
import Transitions from './Transition';


const AddNote = (props) => {
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title:"",description:"",tag:""})

    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag.length===0?"default":note.tag)
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Note added successfully!","success");
      }

      const onChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value})}
  return (
    <Transitions>
    <div className="container my-3">
    <form >
      <div className="mb-3">
        <lzel htmlFor="title" className="form-label">Title</lzel>
        <input type="text" minLength={5} className="form-control" id="title" name="title" value={note.title} onChange={onChange}/>
         
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input type="text" minLength={5} className="form-control" id="description" name="description" value={note.description} onChange={onChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">Tag</label>
        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
      </div>
      <button type="submit" className="btn btn-primary " disabled={(note.title || note.description).length <5} onClick={handleClick}>Submit</button>
    </form>
  </div> 
  </Transitions> 
  )
}

export default AddNote