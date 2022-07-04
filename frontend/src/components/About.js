import React from 'react'
import Notes from './Notes';
import Transitions from './Transition';
export const About = (props) => {
  return (
    <Transitions>
    <div>
      <h3 className=" my-3" style={{fontFamily: 'Lobster, cursive',fontWeight:'bold',fontStretch:'ultra-expanded',color:'#666677'}}>Add a new note!</h3> 
      <Notes showAlert={props.showAlert}/> 
    
    </div>
    </Transitions>
  )
}
