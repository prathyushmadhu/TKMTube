// Navbar.js

import React from 'react';
import './Navbar.css';
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <nav className="navbar">
<>
  <img src="logo.png" alt="TkmTube Logo" style={{ marginTop: '0px', marginLeft: '0px', width: '150px', height: 'auto' }} />
</>
      <div className='new'>
        this is a sample test
      </div>

      <div className='new-center' style={{ transform: 'translateX(-270px)' }}>
      <ul className="nav-links">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
        <li><a href="/Gallery">Gallery</a></li>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
        <li><a href="/blog">Blog</a></li>
        </motion.div>
      </ul>
      </div>

      <div className='new2'>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
        <div className='prolink'><a href="/Profile">Profile</a></div>
        </motion.div>
        <div className='propik'></div>
      
      </div>
      
      
    </nav>
  );
};

export default Navbar;
