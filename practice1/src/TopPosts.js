import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TopPosts.css'; // Assuming you have a CSS file for styling top posts

function TopPosts() {
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/blogs/')
      .then(response => {
        setTopPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching top posts:', error);
      });
  }, []);

  return (
    <div className="top-posts">
      <h1 className="top-posts-heading">Top Picks for you</h1>
      
      <ul className="top-posts-list">
        {topPosts.map(post => (
          // add a line break here
          
          <li key={post.id} className="top-posts-item">
            {/* Profile picture div */}
            <div className="profile-pic"></div>
            <br />
            {/* Blog post content */}
            <div className="post-content">
              <h2 className="top-posts-title">{post.title}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopPosts;
