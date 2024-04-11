// Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/Gallery">Gallery</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/Profile">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
