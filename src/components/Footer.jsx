import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://github.com/vishesh2408" // Replace with your actual GitHub link
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://leetcode.com/u/Leet_V/" // Replace with your actual LeetCode link
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon leetcode"
        >
          <SiLeetcode size={24} />
        </a>
        <a
          href="YOUR_INSTAGRAM_LINK" // Replace with your actual Instagram link
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="YOUR_WHATSAPP_LINK" // Replace with your actual WhatsApp link (e.g., https://wa.me/YOUR_PHONE_NUMBER)
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/vishesh-yadav-/" // Replace with your actual LinkedIn link
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Vishesh Yadav. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;