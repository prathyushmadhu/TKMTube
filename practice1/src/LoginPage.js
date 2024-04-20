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
    <div className="container">
      <div className="image-section">
        <div className="image-wrapper">
          <img src="./mesh-gradient.png" alt="" />
        </div>
        <div className="content-container">
          <h1 className="section-heading">Welcome Back! <span>👋🏻</span></h1>
          <p className="section-paragraph">Enter your credentials to access your account.</p>
        </div>
      </div>

      <div className="form-section">
        <div className="form-wrapper">
          <div className="logo-container">
            <a href="#" className="logo-container">
              <img src="./logo.png" alt="TKMTUBE Logo" />
            </a>
          </div>
          <h2>Login</h2>
          <form>
            <div className="input-container">
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="off" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="remember-forgot">
              <div className="remember-me">
                <input type="checkbox" value="remember-me" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <a href="#">Forgot password?</a>
            </div>
            <div className="button-group">
              <button type="button" className="login-btn" onClick={handleSignIn}>Log In</button>
              <button type="button" className="google-signin">
                <object data="./google.svg"></object>
                <span>Sign in with Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
