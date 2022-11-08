import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
      <>
   <nav className="navbar navbar-expand-lg bg-transparent">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
          <Link className="nav-link active" aria-current="page" to="login">Login</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
 
    </>
  )
}
