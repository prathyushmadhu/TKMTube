import React, { useEffect, useState } from 'react';
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

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Replace with your actual server endpoint URL
  const dataUrl = 'http://localhost:3032/posts'; // Assuming a JSON endpoint

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state

      try {
        const response = await fetch(dataUrl);

        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err.message); // Set error state
      } finally {
        setIsLoading(false); // Reset loading state
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <Post key={post.id} {...post} /> // Destructure post properties
      ))}
    </div>
  );
}

export default PostsList;
