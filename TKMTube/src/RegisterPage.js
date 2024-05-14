import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBContainer, MDBCol, MDBRow, MDBInput } from 'mdb-react-ui-kit';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    fetch('http://localhost:8000/userdetails/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Add any success handling here
      })
      .catch((error) => {
        console.error('Error:', error);
        // Add error handling here
      });
  };

  return (
    <>
      <h1 className="text-white" style={{ fontSize: '2.5rem', marginTop: '20px', marginLeft: '20px', fontFamily: 'Noto Sans', fontWeight: 'bold' }}>TkmTube</h1>

      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample" />
          </MDBCol>
          <MDBCol col='8' md='6' style={{ marginTop: '100px' }}>
            <div style={{ marginTop: '-50px' }}>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ fontSize: '2rem' }}>Sign up</p>
              <MDBInput wrapperClass='mb-4' label='Your Name' name='name' id='nameInput' type='text' size="lg" value={formData.name} onChange={handleChange} />
              <MDBInput wrapperClass='mb-4' label='E-mail' name='email' id='emailInput' type='email' size="lg" value={formData.email} onChange={handleChange} />
              <MDBInput wrapperClass='mb-4' label='Password' name='password' id='passwordInput' type='password' size="lg" value={formData.password} onChange={handleChange} />
              <MDBInput wrapperClass='mb-4' label='Confirm password' name='confirmPassword' id='confirmPasswordInput' type='password' size="lg" value={formData.confirmPassword} onChange={handleChange} />
              <div className="d-flex justify-content-center">
                <button className='btn btn-lg btn-primary mb-4' onClick={handleSubmit}>
                  Register
                </button>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        <div className="loginfooter">
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary" style={{ marginTop: '23px' }}>
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
