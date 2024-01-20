// src/components/Footer.js
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Create this CSS file to style the footer

const Footer = () => {
  return (
    <footer className="footer" style={{}}>
      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p>&copy; 2024 Your Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
