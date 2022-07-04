import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Transitions from './Transition';

export default function Login(props) {
  var history = useHistory()
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const Submit = async(e) => {
    e.preventDefault();
      const response = await fetch(`http://localhost:5000/user/loginuser`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email:credentials.email, password:credentials.password })
      });
      const json = await response.json();
      if(json.success){
        // redirect
        props.showAlert("Logged in successfully!","success");
        localStorage.setItem('token',json.authtoken);
        history.push("/notes")
      }
      else{
        props.showAlert("Invalid credentials!","danger")
      }
     }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <Transitions>
    <div className='mt-5 '>
      <h3 className='mb-5' style={{fontFamily: 'Lobster, cursive',fontWeight:'bold',fontStretch:'ultra-expanded',color:'#666677'}}>Login to access your notes on the go!</h3>
      <form onSubmit={Submit} action='/login' method='POST'>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" name="password">Password</label>
          <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password} />

        </div>
        <button type="submit" className="btn btn-primary" style={{cursor:'pointer',zIndex:'99'}} disabled={(credentials.password || credentials.email).length <5} >Submit</button>
      </form>
    </div>
    </Transitions>
  )
}
