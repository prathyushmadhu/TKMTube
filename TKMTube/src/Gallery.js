import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/gallery')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setImages(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching images: {error.message}</p>;
  }

  return (
    <div>
      {images.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index + 1}`} style={{ display: 'block', margin: '10px 0' }} />
      ))}
    </div>
  );
};

export default Gallery;
