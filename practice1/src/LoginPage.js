import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    // Perform login logic here
  };
  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="button-group">
            <button type="button" className="signin-button" onClick={handleSignIn}>Sign In</button>
            <button type="button" className="register-button" onClick={handleRegister}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;