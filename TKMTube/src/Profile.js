import Navbar from './Navbar';
import Footer from './Footer';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
// import DeleteIcon from '@mui/icons-material/Delete';
// import Grid from '@mui/material/Grid';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// // import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import './Profile.css';
import { useTrail, animated } from '@react-spring/web'
import Loading from './Loading';

function Profile() {
  const [posts, setPosts] = useState([]);
  const [LoggedInUser, setLoggedInUser] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  const trails = useTrail(1, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 5000 } // Adjust the duration as needed (in milliseconds)
  })
  const handlePost = (title, content, closePopup) => {
    // Prepare the data to be sent
    const postData = {
      title: title,
      body: content,
      username: LoggedInUser,
      // createdAt: new Date().toISOString()
    };
  
    // Send the data to the desired URL
    fetch('http://localhost:8080/blogs/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    
    .then(response => {
      if (response.ok) {
        
        // Close the popup after successful posting
        closePopup();
        console.log('Post successful');
        // Optionally, you can clear the input fields after successful posting
        // setTitle('title');
        // setContent('content');
        // Display an alert message for successful post
        // alert('Blog posted successfully!');
      } else {
        console.error('Post failed');
        throw new Error('Post failed'); // Throw an error to trigger the catch block
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to post the blog. Please try again.'); // Display an alert message for failed post
    });
  };
  

  useEffect(() => {
    const storedLoggedInUser = localStorage.getItem('LoggedInUser');
    if (storedLoggedInUser) {
      setLoggedInUser(storedLoggedInUser);
    }

    axios.get('http://localhost:8080/blogs/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });

  }, []);

  return (
    
    <div className="App">
    {isLoading ? (
      <Loading />
    ) : (
    <div className="profile-page">
      <Navbar />
      <div className="gradient-custom-2">
      {trails.map(props => (
        <animated.div style={props}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7">
              <MDBCard>
                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                  <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                    <MDBBtn outline color="dark" style={{ height: '36px', overflow: 'visible' }}>
                      Edit profile
                    </MDBBtn>
                  </div>
                  <div className="ms-3" style={{ marginTop: '130px' }}>
                    <MDBTypography tag="h5">{LoggedInUser}</MDBTypography>
                    <MDBCardText>TKM</MDBCardText>
                  </div>
                </div>
                <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <MDBCardText className="mb-1 h5">10</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">Blogs</MDBCardText>
                    </div>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4" style={{width:'100%' }}>
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1" style={{ color: 'black' }}>About</p>
                    <div className="p-4" style={{ backgroundColor: '#000000', opacity: 0.5 }}>
                      <MDBCardText className="font-italic mb-1">Web Developer</MDBCardText>
                      <MDBCardText className="font-italic mb-1">Lives in New York</MDBCardText>
                      <MDBCardText className="font-italic mb-0">Photographer</MDBCardText>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCardText className="lead fw-normal mb-0" style={{ color: 'black' }}>Recent Blogs</MDBCardText>
                    {/* <button className="btn btn-dark" onClick={SimplePopup}>Write</button> */}
                   {/*  <div>
  <Popup trigger={<button className="btn btn-dark">Write</button>} modal nested>
    {close => (
      <div className='modal'>
        <div className='content'>
          <div style={{ fontSize: '24px', color: 'black' }}>Welcome to GFG!!!</div>
          <div>
            <input type="text" placeholder="Enter text 1" />
          </div>
          <div>
            <input type="text" placeholder="Enter text 2" />
          </div>
          <div>
            <button onClick={() => close()}>Close modal</button>
          </div>
        </div>
      </div>
    )}
  </Popup>
</div> */}

<Popup trigger={<button className="btn btn-dark">Write</button>} modal nested>
  {close => (
    <div className="popup-container" style={{ color: 'black' }}>
      Write your Blog here !!
      <div>
        <input className="title" type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
      <textarea className="content" placeholder="Content" onChange={e => setContent(e.target.value)} />

      </div>
      <button className="btn btn-dark" onClick={() => handlePost(title, content, close)}>Post</button>
    </div>
  )}
</Popup>
                  </div>
                  
      
        <div className="post-container">
        
        <ul className="post-list">
          {posts.map(post => (
            post.username === LoggedInUser && (
              <li key={post.id} className="post-item-profile">
              {/* Circle div for profile picture */}
              <div className="my-container-profile" >
             
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
                
	
    {/* <p className="likes-count" style={{ display: 'inline-block',  marginLeft: '10px' }}>{post.likes}</p> */}
</div>

              </div>
              </motion.div>
              </div>
            </li>
            )
          ))}
        </ul>
      </div>
      
   
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </animated.div>
      ))}

      </div>
      <Footer />
    </div>
     )}
     </div>
    
  );
}

export default Profile;