import React from 'react'
import {Link,useLocation,useHistory} from 'react-router-dom';
export const Navbar = (props) => {
  let history = useHistory();
  const logout=()=>{
    localStorage.removeItem('token');
    history.push("/login")
    props.showAlert('Logged out successfully!','success')

  }
  let location = useLocation();
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#0f6d91'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home" style={{width:'10%',marginLeft:'1%'}}>
      <h2 style={{fontFamily: 'Lobster, cursive'}}>Notesapp</h2>
     
    </Link>
    <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link  ${location.pathname==='/home'?"active":""}`} aria-current="page" to="/home">Home</Link>
        </li>
        <li className={`nav-item ${localStorage.getItem('token')?'':'d-none'}`}>
          <Link className={`nav-link ${location.pathname==='/notes'?"active":""} pointer-events-none`} to="/notes">Notes</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?
      <form className="d-flex">       
      <Link  to="/login" className={`btn btn-primary  ${location.pathname==='/login'?'d-none':''}`}>Login</Link>
        <Link  to="/signup" className={`btn btn-primary mx-2 ${location.pathname==='/signup'?'d-none':''}`}>Signup</Link></form>
        :<button onClick={logout} className="btn btn-primary">Logout</button>
}    
    </div>
  </div>
</nav>

    </div>
    
  )
}
