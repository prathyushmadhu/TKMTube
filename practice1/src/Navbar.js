// Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className='new'>
        this is a sample test
      </div>

      <div className='new-center'>
      <ul className="nav-links">
        <li><a href="/Gallery">Gallery</a></li>
        <li><a href="/blog">Blog</a></li>
        
      </ul>
      </div>

      <div className='new2'>
        
        <div className='prolink'><a href="/Profile">Profile</a></div>
        <div className='propik'></div>
      
      </div>
      
      
    </nav>
  );
};

export default Navbar;
