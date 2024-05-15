import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import './Blog.css';
import TopPosts from './TopPosts';
import { Provider,LikeButton } from "@lyket/react";
import { useTrail, animated } from '@react-spring/web'


function Post() {
  const [posts, setPosts] = useState([]);
  const trails = useTrail(1, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 5000 } // Adjust the duration as needed (in milliseconds)
  })
  
  
  useEffect(() => {
    axios.get('http://localhost:8080/blogs/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    
      
       
    <div className="post-blog">
      
      <div className="post-container">
      {trails.map(props => (
        <animated.div style={props}>
        <h1 className="post-heading">Blogs</h1>
        <ul className="post-list">
          {posts.map(post => (
            <li key={post.id} className="post-item">
              {/* Circle div for profile picture */}
              <div className="my-container">
             
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.0 }}>
              <div className='post-header' >
              <div className="profile-picture"></div>
              <div className=''><p className="post-author">@{post.username}</p></div>
              </div>
              <div className="post-content">
                
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
                {/* <p className="post-created-at">Created At: {post.createdAt}</p> */}
                <div style={{ display: 'inline-block' }}>
                <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
  <LikeButton
    namespace="testing-react"
    id="everybody-like-now"
  />
</Provider>
	
    {/* <p className="likes-count" style={{ display: 'inline-block',  marginLeft: '10px' }}>{post.likes}</p> */}
</div>

              </div>
              </motion.div>
              </div>
            </li>
          ))}
        </ul>
        </animated.div>
      ))}
      </div>
      
      <div className="top-posts-container">
        <TopPosts />
      </div>
    </div>
    
    
  );
}

export default Post;
