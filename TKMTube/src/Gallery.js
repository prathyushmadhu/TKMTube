// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import './Gallery.css'
// function Gallery() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend when the component mounts
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http:localhost:9005/gallery/');
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();
//       setPosts(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div >
//       <Navbar />
//       <h1>Welcome!!</h1>
//       <div className="gallery">   
//       {posts.map(post => (
//         <div key={post.id} className="post">
//           <img src={post.profilePictureUrl} alt={post.username} />
//           <div>
//             <p>Username: {post.username}</p>
//             <p>Time: {post.time}</p>
//           </div>
//         </div>
//       ))}
//       </div>
//     </div>
//   );
// }

// export default Gallery;


import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [profiles, setProfiles] = useState([]);
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('http://localhost:9005/gallery/', {
        method: 'POST', // Use POST for sending username in request body
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }), // Send username in request body
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profiles');
      }

      const data = await response.json();
      setProfiles(data);
      setUsername(''); // Clear username input after successful fetch
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };

  return (
    <div>
      <h2>Gallery</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Fetch Profiles</button>
      </form>
      {profiles.length > 0 ? (
        <ul>
          {profiles.map((profile) => (
            <li key={profile.id}>
              {/* Assuming 'profilePictureUrl' is a property in your Profile model */}
              <img src={profile.profilePictureUrl} alt={profile.username} />
              {/* Display username or other relevant information */}
              <p>{profile.username}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No profiles found.</p>
      )}
    </div>
  );
};

export default Gallery;
