import React from 'react'
const Alert = (props) => {
 
  return (
    <div className='container-md' style={{height:'50px', width:'250px',position:'fixed',top:'5px',marginLeft:'41%',zIndex:'999'}}>
      {props.alert &&  <div className={`alert alert-${props.alert.type==='success'?'primary':'danger'} fade show`} role="alert">
     {props.alert.message} 
     </div>}
     </div>
  )
}

export default Alert