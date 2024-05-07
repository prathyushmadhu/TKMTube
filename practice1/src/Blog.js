import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Blog.css';

function Post() {
  const [posts, setPosts] = useState([]);

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
      <h1 className="post-heading">Blogs</h1>
      <ul className="post-list">
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <p className="post-author">Author: {post.username}</p>
            <p className="post-id">ID: {post.id}</p>
            <p className="post-created-at">Created At: {post.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Post;