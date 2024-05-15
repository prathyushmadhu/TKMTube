import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TopPosts.css'; // Assuming you have a CSS file for styling top posts
import { motion } from "framer-motion";
import { useTrail, animated } from '@react-spring/web'

function TopPosts() {
  const [topPosts, setTopPosts] = useState([]);

  const trails = useTrail(1, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 } // Adjust the duration as needed (in milliseconds)
  })

  useEffect(() => {
    axios.get('http://localhost:8080/blogs/')
      .then(response => {
        setTopPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching top posts:', error);
      });
  }, []); // Empty dependency array to prevent unnecessary re-renders

  return (
    <div className="top-posts">
       {trails.map(props => (
        <animated.div style={props}>
      <h1 className="top-posts-heading">Top Picks for you</h1>

      <ul className="top-posts-list">
        {topPosts.map(post => (
          <li key={post.id} className="top-posts-item">
            {/* Profile picture div */}
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
            
            {/* Blog post content */}
            <div className="post-content">
            <div className="profile-pic"></div>
              <h2 className="top-posts-title">{post.title}</h2>
            </div>
            </motion.div>
          </li>
        ))}
      </ul>

      {/* Removed the commented-out animated.div with useSpring */}
      </animated.div>
      ))}
    </div>
  );
}

export default TopPosts;