import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container flex items-center justify-between">
        <div className="logo flex items-center gap-3">
          <div className="text-2xl font-bold text-purple-600">Vishesh</div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 nav">
          <a className="px-3 py-1 rounded-md hover:bg-white/5 transition" href="/">Home</a>
          <a className="px-3 py-1 rounded-md hover:bg-white/5 transition" href="/about">About</a>
          <a className="px-3 py-1 rounded-md hover:bg-white/5 transition" href="/skills">Skills</a>
          <a className="px-3 py-1 rounded-md hover:bg-white/5 transition" href="/achievements">Achievements</a>
          <a className="px-3 py-1 rounded-md hover:bg-white/5 transition" href="/certifications">Certifications</a>
          <a className="px-3 py-1 rounded-md hover:bg-white/5 transition" href="/projects">Projects</a>
          <a className="px-3 py-1 rounded-md hover:bg-white/5 transition" href="/resume">Resume</a>
          <a className="px-3 py-1 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white" href="/contact">Contact</a>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            className="p-2 rounded-md text-gray-200 hover:bg-white/5"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel - render only when open to avoid duplicate menus on desktop */}
      {open && (
        <div className="mobile-panel px-4 pb-4">
          <nav className="stack">
            <a className="block py-2 px-3 rounded-md hover:bg-white/5" href="/">Home</a>
            <a className="block py-2 px-3 rounded-md hover:bg-white/5" href="/about">About</a>
            <a className="block py-2 px-3 rounded-md hover:bg-white/5" href="/skills">Skills</a>
            <a className="block py-2 px-3 rounded-md hover:bg-white/5" href="/achievements">Achievements</a>
            <a className="block py-2 px-3 rounded-md hover:bg-white/5" href="/certifications">Certifications</a>
            <a className="block py-2 px-3 rounded-md hover:bg-white/5" href="/projects">Projects</a>
            <a className="block py-2 px-3 rounded-md hover:bg-white/5" href="/resume">Resume</a>
            <a className="block py-2 px-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center" href="/contact">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
