import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import Transitions from './Transition'

export default function Signup(props) {
  var history = useHistory()

  const [credentials, setCredentials] = useState({name:"",password:"",email:""})
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const Submit = async(e)=>{
    e.preventDefault()
    const response = await fetch(`http://localhost:5000/user/createuser`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name:credentials.name,email:credentials.email, password:credentials.password})
    });
    const json = await response.json();
    if(json.success){
      // redirect
      props.showAlert(`Welcome to Notesapp, ${credentials.name}!`,"success")
      localStorage.setItem('token',json.authtoken);
      history.push("/notes")
    }
    else{
      props.showAlert(`Invalid credentials!`,"danger")

    }
   

  }
  return (
    <Transitions>
    <div className='mt-5'>
      <h3 style={{fontFamily: 'Lobster, cursive',fontWeight:'bold',fontStretch:'ultra-expanded',color:'#666677'}}>Sign up!</h3>
      <form onSubmit={Submit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Username</label>
          <input type="text" className="form-control" id="name" value={credentials.name} onChange={onChange} name='name'/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" name="password">Password</label>
          <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} minLength={5} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email"  value={credentials.email} onChange={onChange} aria-describedby="emailHelp" minLength={5} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary" style={{cursor:'pointer',zIndex:'99'}} disabled={(credentials.name || credentials.password || credentials.email).length <5}>Submit</button>
      </form>


    </div>
    </Transitions>
  )
}
