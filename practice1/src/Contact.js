// Contact.js

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-info">
        <div className="info-item">
          <h3>Email</h3>
          <p className="info-text">info@example.com</p>
        </div>
        <div className="info-item">
          <h3>Phone</h3>
          <p className="info-text">+123 456 7890</p>
        </div>
        <div className="info-item">
          <h3>Address</h3>
          <p className="info-text">123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
