import React, { useContext} from 'react'
import NoteContext from '../contexts/notes/noteContext';
import Transitions from './Transition';
const NewsItem = (props) => {
  const context = useContext(NoteContext);
  const { delNote } = context;

  const deleteNote = () => {
    delNote(note._id)
    props.showAlert("Note deleted successfully!", "success");
  }
  const { note, updateNote } = props

  const cardStyle = {
    border: '4px solid #c8c8d2',
    width: '18rem',
    height: '15rem',
    borderRadius: '10px',
    backgroundColor: 'blue',
    backgroundImage: 'linear-gradient(to bottom right, #186d7e, white)',
    color: 'white',
    cursor: 'pointer'
  }
  const iconstyle = {
    position: 'absolute',
    top: '86%',
    left: '38%',
    border: '2px solid #a6a6a6',
    backgroundColor: '#afb8b2',
    color: '#938989'


  }


  return (
    <Transitions>
    <div>
      <div className="my-3">
        <div className="card m-3" id='cardStyle' style={cardStyle} >
          <div className="card-body" >
            <div className="d-flex justify-content-center" >
              <h5 className="card-title text-center" style={{ color: '#484949' }} >{note.title}</h5>
              <div className="icons" id='iconStyle' style={iconstyle}>
                <i className="fa-solid fa-trash-can mx-2" onClick={deleteNote}></i>
                <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i></div>
            </div>
            <p className="card-text">{note.description}</p>
            <span className="badge bg-danger">{note.tag}</span>


          </div>
        </div>
      </div>
    </div>
    </Transitions>
  )
}


export default NewsItem