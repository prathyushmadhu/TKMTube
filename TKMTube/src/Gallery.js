import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Gallery.css'
function Gallery() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('URL of posts');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div >
      <Navbar />
      <h1>Welcome!!</h1>
      <div className="gallery">   
      {posts.map(post => (
        <div key={post.id} className="post">
          <img src={post.imageUrl} alt={post.username} />
          <div>
            <p>Username: {post.username}</p>
            <p>Time: {post.time}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Gallery;
