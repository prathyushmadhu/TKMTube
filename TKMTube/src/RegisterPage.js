import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBContainer, MDBCol, MDBRow, MDBInput } from 'mdb-react-ui-kit';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (formData) => {
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
        alert('Registration successful!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Registration Failed!');
      });
  };
  

  return (
    <>
      <>
  <img src="logo.png" alt="TkmTube Logo" style={{ marginTop: '20px', marginLeft: '20px', width: '200px', height: 'auto' }} />
</>

      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample" />
          </MDBCol>
          <MDBCol col='8' md='6' style={{ marginTop: '75px' }}>
            <div style={{ marginTop: '-50px' }}>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ fontSize: '2rem' }}>Sign up</p>
              <MDBRow>
                <MDBCol size='6'>
                  <MDBInput wrapperClass='mb-4' label='First Name' name='firstName' id='firstNameInput' type='text' size="lg" value={formData.firstName} onChange={handleChange} />
                </MDBCol>
                <MDBCol size='6'>
                  <MDBInput wrapperClass='mb-4' label='Last Name' name='lastName' id='lastNameInput' type='text' size="lg" value={formData.lastName} onChange={handleChange} />
                </MDBCol>
              </MDBRow>
              <MDBInput wrapperClass='mb-4' label='Username' name='username' id='usernameInput' type='text' size="lg" value={formData.username} onChange={handleChange} />
              <MDBInput wrapperClass='mb-4' label='E-mail' name='email' id='emailInput' type='email' size="lg" value={formData.email} onChange={handleChange} />
              <MDBInput wrapperClass='mb-4' label='Password' name='password' id='passwordInput' type='password' size="lg" value={formData.password} onChange={handleChange} />
              <div className="d-flex justify-content-center">
              <button className='btn btn-lg btn-primary mb-4' onClick={() => handleSubmit(formData)}>
  Register
</button>




              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default App;
