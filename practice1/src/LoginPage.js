import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { MDBContainer, MDBCol, MDBRow, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [LoggedInUser, setLoggedInUser] = useState(''); // State variable to store the logged-in user

  const handleLogin = () => {
    if (username === '' || password === '') {
      setLoginStatus('Login Failed');
    } else if (username === password) {
      setLoggedInUser(username); // Store the username in LoggedInUser variable
      setLoginStatus('Login Successful');
      // Navigate to '/blog' route after successful login
      window.location.href = '/blog';
    } else {
      setLoginStatus('Login Failed');
    }
  };

  return (
    <>
      <h1 className="text-white" style={{ fontSize: '2.5rem', marginTop: '20px', marginLeft: '20px', fontFamily: 'Noto Sans', fontWeight: 'bold' }}>TkmTube</h1>

      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample" />
          </MDBCol>

          <MDBCol col='4' md='6' style={{ marginTop: '80px' }}>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>

              <button className='btn btn-primary me-2'>
                <FontAwesomeIcon icon={faFacebookF} />
              </button>

              <button className='btn btn-primary me-2'>
                <FontAwesomeIcon icon={faTwitter} />
              </button>

              <button className='btn btn-primary me-2'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </button>
            </div>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <MDBInput wrapperClass='mb-4' label='Username' id='usernameInput' type='text' size="lg" value={username} onChange={(e) => setUsername(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' id='passwordInput' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>

            <div className='text-center text-md-start mt-4 pt-2'>
              <button className="btn btn-primary mb-0 px-5" onClick={handleLogin}>Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-2" style={{ color: loginStatus === 'Login Failed' ? 'red' : loginStatus === 'Login Successful' ? 'green' : 'inherit' }}>{loginStatus}</p>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/register" className="link-danger">Register</a></p>
            </div>
          </MDBCol>
        </MDBRow>

        <div className="loginfooter">
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary" style={{ marginTop: '125px' }}>
            <div className="text-white mb-3 mb-md-0">
              Copyright © 2024. All rights reserved.
            </div>
          </div>
        </div>
      </MDBContainer>
    </>
  );
}

export default App;
