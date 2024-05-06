import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBContainer, MDBCol, MDBRow, MDBInput } from 'mdb-react-ui-kit';

function App() {

  return (
    <>
    <h1 className="text-white" style={{ fontSize: '2.5rem', marginTop: '20px', marginLeft: '20px', fontFamily: 'Noto Sans', fontWeight: 'bold' }}>TkmTube</h1>


    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6' >
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample" />
        </MDBCol>

        <MDBCol col='8' md='6' style={{ marginTop: '100px' }}>

<div style={{ marginTop: '-50px' }}>
  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ fontSize: '2rem' }}>Sign up</p>

  <MDBInput wrapperClass='mb-4' label='Your Name' id='emailInput' type='email' size="lg" />
  <MDBInput wrapperClass='mb-4' label='E-mail' id='emailInput' type='email' size="lg" />
  <MDBInput wrapperClass='mb-4' label='Password' id='passwordInput' type='password' size="lg" />
  <MDBInput wrapperClass='mb-4' label='Confirm password' id='passwordInput' type='password' size="lg" />

  <div className="d-flex justify-content-center">
    <button className='btn btn-lg btn-primary mb-4' onClick={() => window.location.href="/blog"}>
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

    </MDBContainer></>
  );
}

export default App;
