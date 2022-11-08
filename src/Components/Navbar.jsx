import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
      <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="tv">TV</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="people">People</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="move">Move</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="about">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="contacts">Contacts</Link>
        </li>
        
      </ul>
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="login">LogIn</Link>
        </li>
        <li className="nav-item">
          <span className="nav-link active" aria-current="page">Logout</span>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
 
    </>
  )
}
