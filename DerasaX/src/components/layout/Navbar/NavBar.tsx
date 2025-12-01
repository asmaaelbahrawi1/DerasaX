// import React from 'react'
import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/images/nav-logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

interface NavBarProps {
  className?: string;
} 

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    //check if user scroll
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]); 
  const initialClass = className ? className : "navbar-default";

  // const baseClass = className ? className : "navbar-default";
  const finalClass = scrolled ? "navbar-scrolled" : initialClass;

  return (
    <div className="container">
      <nav className={finalClass}>
        <div className="nav-left">
          <img src={Logo} alt="DerasaX Logo" className="logo-image" />
        
        </div>

        <div className="nav-links">
          <Link to="/" className="link-nav">Home</Link>
          <Link to="/AboutPage" className="link-nav">About</Link>
          <Link to="/product" className="link-nav">Our Product</Link>
          <Link to="/Activities" className="link-nav">Community</Link>
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
