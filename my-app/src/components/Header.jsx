import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container flex items-center justify-between">
        <div className="logo flex items-center gap-3">
          <Link to="/" className="text-2xl font-bold text-teal-600 hover:text-teal-500 transition">Vishesh</Link>
        </div>

        {/* Desktop nav */}
        <nav className="desktop-nav nav">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Skills', path: '/skills' },
            { name: 'Achievements', path: '/achievements' },
            { name: 'Certifications', path: '/certifications' },
            { name: 'Projects', path: '/projects' },
            { name: 'Resume', path: '/resume' },
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1 rounded-md transition ${isActive ? 'bg-white/10 text-teal-400' : 'hover:bg-white/5 text-gray-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="px-3 py-1 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <div className="mobile-toggle">
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
          <nav className="flex flex-col space-y-2 mt-2">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Skills', path: '/skills' },
              { name: 'Achievements', path: '/achievements' },
              { name: 'Certifications', path: '/certifications' },
              { name: 'Projects', path: '/projects' },
              { name: 'Resume', path: '/resume' },
            ].map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md transition ${isActive ? 'bg-white/10 text-teal-400' : 'hover:bg-white/5 text-gray-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block py-2 px-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center hover:opacity-90 transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
