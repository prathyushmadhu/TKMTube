// Post.js

import React from 'react';
import './Post.css';

const Post = ({ name, title, body }) => {
  return (
    <div className="post">
      <h2 className="post-name">{name}</h2>
      <p className="post-blog">{title}</p>
      <p className="post-time">{body}</p>
    </div>
  );
};

export default Post;
