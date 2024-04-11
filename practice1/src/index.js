import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client instead of react-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Contact from './Contact';
import Terms from './Terms';
import PrivacyPolicy from './PrivacyPolicy';
import Gallery from './Gallery';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/blog" element={<App />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
