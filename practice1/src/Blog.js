import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Author: {post.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
