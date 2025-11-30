// import React from 'react'
import Logo from '../../../assets/images/logo-img.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

interface NavBarProps {
  className?: string;
} 

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <div className="container">
      <nav className={className ? className : "navbar-default"}>
        <div className="nav-left">
          <img src={Logo} alt="EduTera Logo" className="logo-image" />
          <div className="logo-text">
            <h1 className="title">
              Edu<span style={{ color: "#68AAB6" }}>T</span>era
            </h1>
            <span className="subtitle">Smart Learning. Bright Minds.</span>
          </div>
        </div>

        <div className="nav-links">
          <Link to="/" className="link-nav">Home</Link>
          <Link to="/AboutPage" className="link-nav">About</Link>
          <Link to="/product" className="link-nav">Our Product</Link>
          <Link to="/community" className="link-nav">Community</Link>
        </div>

        <div className="nav-buttons">
          <Link to="/RequestDemoPage">
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
