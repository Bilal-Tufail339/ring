import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);


  const loginRef = useRef(null);
  const languageRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setLoginOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="top-banner">
        <strong className='navGartner'>Gartner</strong> 
        <span className='span1'>|</span> 
        <span className='span2'>names RingCentral a Magic Quadrant™ Leader for the 10th year in a row</span>
        <button className='navbtn'>Get The report</button>
      </div>

      <nav className="navbar">
        <div className="navbar-logo nav-logo">Ring<span style={{ color: "#0070c9" }}>Central</span></div>
        <div className="navbar-links">

          <a href="#">Talk to an expert: 
            <span className='navnumber'>+44 (0)800 098 8136</span>
          </a>
          <a href="#">Join Meeting</a>
          <a href="#">Support</a>

          {/* Login Dropdown */}
          <div className="dropdown" ref={loginRef}>
            <button className="dropbtn" onClick={() => setLoginOpen(prev => !prev)}>Login</button>
            {loginOpen && (
              <div className="dropdown-content">
                <a href="#">User Login</a>
                <a href="#">Admin Login</a>
                <a href="#">Sign Up</a>
              </div>
            )}
          </div>

          <div className="dropdown" ref={languageRef}>
            <button className="dropbtn" onClick={() => setLanguageOpen(prev => !prev)}>
              <i className="fa-solid fa-globe"></i>
            </button>
            {languageOpen && (
              <div className="dropdown-content">
                <a href="#">English</a>
                <a href="#">Français</a>
                <a href="#">Deutsch</a>
              </div>
            )}
          </div>

          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </nav>

      {/* Main Menu
      <div className="selectors">
        <a href="#">Products</a>
        <a href="#">Solutions</a>
        <a href="#">Plan & Pricing</a>
        <a href="#">Partners</a>
        <a href="#">Resources</a>
        <a href="#">Company</a>
      </div> */}
    </>
  );
};

export default Navbar;
