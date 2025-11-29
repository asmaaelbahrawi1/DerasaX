// import React from 'react'
import Logo from '../../../assets/images/logo-img.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

const NavBar = () => {
  return (
    <div className="container">
      <nav className="nav">
      <div className="nav-left">
        <img src={Logo}  alt="EduTera Logo" className="logo-image" />
        <div className="logo-text">
          <h1 className="title">Edu<span style={{color:"#68AAB6"}}>T</span>era</h1>
          <span className="subtitle">Smart Learning. Bright Minds.</span>
        </div>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <Link to="/AboutPage">About</Link>
        <a href="#">Our Product</a>
      </div>

      <div className="nav-buttons">
        <Link to="/demo">
            <button className="btn-demo">Request a demo</button>
        </Link>
        <Link to="/signin">
            <button className="btn-signin">Sign in</button>
        </Link>
      </div>
      </nav>
    </div>
  )
}

export default NavBar