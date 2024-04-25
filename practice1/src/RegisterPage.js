// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './RegisterPage.css';

// const RegisterPage = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState(''); // New state for user type

//   /*const handleCreateAccount = async () => {
//     try {
//       const response = await fetch('/auth/users/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           email,
//           password,
//           userType,
//         }),
//       });

//       if (response.ok) {
//         console.log('User account created successfully!');
//         // Navigate to the desired route
//         navigate('/blog');
//       } else {
//         // Handle error response
//         console.error('Failed to create user account');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   };*/

//   const handleCreateAccount = () => {
//     navigate('/blog');
//   };

//   return (
//     <div className="register-page">
//       <div className="register-container">
//         <h2>Create Account</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="user-type">User Type:</label>
//             <select id="user-type" value={userType} onChange={(e) => setUserType(e.target.value)}>
//               {/* <option value="">Select User Type</option> */}
//               <option value="Person">Person</option>
//               <option value="Organisation">Organisation</option>
//             </select>
//           </div>
//           <button type="button" onClick={handleCreateAccount}>Create Account</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid className='my-5'>

      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md' href="/blog">sign up</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col='6'>
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4"
            alt="" fluid="true"/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;