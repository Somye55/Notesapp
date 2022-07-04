import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
    const initialNotes = []
    const [notes, setNotes] = useState(initialNotes)
    
     const fetchAllNotes = async () =>{
      const response = await fetch(`/notes/fetchallnotes`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            }           
          });
          const jsona = await response.json();
          setNotes(jsona);
        }
    
        const addNote = async (title,description,tag) =>{
          const response = await fetch(`/notes/addnote`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                  'Content-Type': 'application/json',
                  'auth-token': localStorage.getItem('token')
                } ,
                body: JSON.stringify({title, description, tag})          
              }); 
              const note = await response.json();
              setNotes(notes.concat(note));
            }
        const updatenote = async (id,title,description,tag) =>{
          const response = await fetch(`/notes/updatenote/${id}`, {
                method: 'PUT', // *GET, POST, PUT, DELETE, etc.
                headers: {
                  'Content-Type': 'application/json',
                  'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({title, description, tag})       
              }); 
              const json = await response.json();
              let newNote = JSON.parse(JSON.stringify(notes))

              for(let index=0;index<newNote.length;index++){
                const element = newNote[index];
                if(element._id===id){
                  newNote[index].title = title;
                  newNote[index].description = description;
                  newNote[index].tag = tag;
                  break;
                } 
              }
              setNotes(newNote)
              
            }
      const delNote = async (id) =>{
        const response = await fetch(`/notes/deletenote/${id}`, {
              method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
              headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
              }           
            });
            const json = await response.json();
            const newNotes = notes.filter((note) => { return note._id !== id })
            setNotes(newNotes)
          }
     
    return(
        <NoteContext.Provider value={{notes,setNotes,addNote,delNote,fetchAllNotes,updatenote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;