// App.js


import './App.css';
import React, { useState,useEffect } from 'react';
import Footer from './Footer';
import Blog from './Blog';
import Navbar from './Navbar';
import Loading from './Loading';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
    {isLoading ? (
      <Loading />
    ) : (
    <div className="App">
     <Navbar />
      <div className="content">
        <Blog />
      </div>
      <Footer />
    </div>
    )}
    </div>
  );
}

export default App;