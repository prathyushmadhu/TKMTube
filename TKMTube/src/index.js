import React from 'react';
// import { createPopper, detectOverflow } from '@popperjs/core';

import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client instead of react-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import LoginForm from './LoginForm';
import Contact from './Contact';
import Terms from './Terms';
import PrivacyPolicy from './PrivacyPolicy';
import Gallery from './Gallery';
import Profile from './Profile';
import AppContent from './AppContent';
// import SignUpForm from './signUpForm';
// import Sliding from './Sliding'



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/blog" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Profile" element={<Profile />} />
        {/* <Route path="/sgal" element={<Sliding/>}/> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
