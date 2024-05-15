import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TopPosts.css'; // Assuming you have a CSS file for styling top posts
import { motion } from "framer-motion";
import { useTrail, animated } from '@react-spring/web'
// import { useSpring, animated } from '@react-spring/web'

function TopPosts() {
  const [topPosts, setTopPosts] = useState([]);
  // const springs = useSpring({
  //   from: { y: 1000 },
    
  //   to: { y: 0 },
  //   config: { duration: 2500 }
  // })
  const trails = useTrail(2, {
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
  }, []);

  return (
    <div className="top-posts">
      {/* <animated.div style={{
        // width: 80,
        // height: 80,
        // background: '#ff6d6d',
        // borderRadius: 8,
        ...springs,
      }}> */}
      {trails.map(props => (
        <animated.div style={props}>
      <h1 className="top-posts-heading">Top Picks for you</h1>
      
      <ul className="top-posts-list">
        {topPosts.map(post => (
          // add a line break here
          
          <li key={post.id} className="top-posts-item">
            {/* Profile picture div */}
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
            <div className="profile-pic"></div>
            
            {/* Blog post content */}
            <div className="post-content">
              <h2 className="top-posts-title">{post.title}</h2>
            </div>
            </motion.div>
          </li>
        ))}
      </ul>
      {/* </animated.div> */}
      </animated.div>
      ))}
    </div>
  );
}

export default TopPosts;
