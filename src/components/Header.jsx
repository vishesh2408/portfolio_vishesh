import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Vishesh</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="about">About</a>  
        <a href="skills">Skills</a>
        <a href="achievements">Achievements</a>
        <a href="certifications">Certifications</a>
        <a href="projects">Projects</a>
        <a href="resume">Resume</a>
      
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
