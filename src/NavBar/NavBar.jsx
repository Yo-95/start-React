import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return <>
  <nav className="navbar navbar-expand-lg text-white bg-secondary ">
  <div className="container ">
    <Link className="navbar-brand text-white" to="/">START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-5">
        <li className="nav-item ">
          <Link className="nav-link active text-white" aria-current="page" to='portfolio'>PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to='about'>ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to='contact'>CONTACT</Link>
        </li>
       
      </ul>
    </div>
    
  </div>
</nav>
  </>
}
