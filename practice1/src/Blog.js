import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Blog.css';

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3032/users')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="post-container">
      <h1 className="post-heading">Blog Posts</h1>
      <ul className="post-list">
        {posts.map(post => (
          <li key={post.title} className="post-item">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <p className="post-author">Author: {post.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
