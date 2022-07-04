import React from 'react';
import NoteItem from './NoteItem';
import { useContext,useEffect,useRef,useState } from 'react';
import NoteContext from '../contexts/notes/noteContext';
import AddNote from './AddNote';
import ScrollAnimation from 'react-animate-on-scroll';
import Transitions from './Transition';


const Notes = (props) => {
    const context = useContext(NoteContext);
    const {notes,fetchAllNotes,updatenote} = context;
    useEffect(() => {
      fetchAllNotes();
      // eslint-disable-next-line 
    }, [])
    const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:""});

    const ref = useRef(null)
    const closeref = useRef(null)

    const handleClick=(e)=>{
      closeref.current.click()   
      updatenote(note.id,note.etitle,note.edescription,note.etag) 
      setNote({etitle:"",edescription:"",etag:""})
      props.showAlert("Note updated successfully!","success");


    }

    const onChange=(e)=>{
      setNote({...note,[e.target.name]: e.target.value})}


  const updateNote = (cnote) => {
    ref.current.click()
    setNote({id:cnote._id,etitle:cnote.title,edescription:cnote.description,etag:cnote.tag}) 
  }

  const nostyle = {
    flexWrap:'wrap'
  }


    
  return (
    <>
    <Transitions>
    <AddNote showAlert={props.showAlert}/>
    <button type="button" className="btn btn-primary invisible" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog" style={{border:'4px solid #808089',borderRadius:'10px'}}>
          <div className="modal-content" style={{backgroundColor:'blue',backgroundImage:'linear-gradient(to right bottom, rgb(45 102 122), #ab282899)'}}>
            <div className="modal-header">
              <h5 className="modal-title w-100 text-center" style={{color:'#9898ab'}} id="exampleModalLabel">Update Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label htmlFor="title" style={{color:'#484949',fontWeight:'bold'}} className="form-label">Title</label>
                  <input type="text" style={{color:'#d94544',fontFamily:'cursive'}} minLength={5} required className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange} />

                </div>
                <div className="mb-3">
                  <label htmlFor="description" style={{color:'#484949',fontWeight:'bold'}} className="form-label">Description</label>
                  <input type="text" minLength={5} style={{color:'#d94544',fontFamily:'cursive'}} required className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" style={{color:'#484949',fontWeight:'bold'}} className="form-label">Tag</label>
                  <input type="text" style={{color:'#d94544',fontFamily:'cursive'}} required className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={closeref}className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick} disabled={(note.etitle.length<5 || note.edescription.length<5||note.etag==="")}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    <h3 className='mx-2' style={{fontFamily: 'Lobster, cursive',fontWeight:'bold',fontStretch:'ultra-expanded',color:'#666677'}}>Your notes</h3>  
        <div className='d-flex flex-row my-3' style={nostyle}> 
        
          {notes.length===0 && "So empty here.."}
          
            {notes.map((note)=>{
        return <ScrollAnimation animateIn="bounceInRight" animateOnce='true' key={note._id}>
        <NoteItem note={note} key={note._id} showAlert={props.showAlert} updateNote={updateNote}/>
        </ScrollAnimation>

      })} 
      </div>
      </Transitions>
      </>
  )
}

export default Notes