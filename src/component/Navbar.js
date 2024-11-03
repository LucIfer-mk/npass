import React from 'react'
import './navbar.css'
import { useState } from 'react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* <h1>It should work</h1> */}
      <nav className="navbar">
      <div className="navbar-logo">Npass</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home" className="nav-link">Home</a>
        <a href="#support" className="nav-link">Support</a>
         {/* <input type="text" placeholder="Search..." className="search-bar" /> if we need search buttion we can get it from here */}
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
    </nav>
    </div>
  )
}
