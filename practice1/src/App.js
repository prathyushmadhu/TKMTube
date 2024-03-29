// App.js

import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Footer from './Footer';
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default App;