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
          href="https://www.instagram.com/vishesh2408_/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://wa.me/919616265078"
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