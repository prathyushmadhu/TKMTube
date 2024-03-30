import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState(''); // New state for user type

  /*const handleCreateAccount = async () => {
    try {
      const response = await fetch('/auth/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          userType,
        }),
      });

      if (response.ok) {
        console.log('User account created successfully!');
        // Navigate to the desired route
        navigate('/blog');
      } else {
        // Handle error response
        console.error('Failed to create user account');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };*/

  const handleCreateAccount = () => {
    navigate('/blog');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Create Account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="user-type">User Type:</label>
            <select id="user-type" value={userType} onChange={(e) => setUserType(e.target.value)}>
              <option value="">Select User Type</option>
              <option value="Person">Person</option>
              <option value="Organisation">Organisation</option>
            </select>
          </div>
          <button type="button" onClick={handleCreateAccount}>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
