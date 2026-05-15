import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Home, User, Code, Trophy, Award, Briefcase, FileText, Mail, Menu, X } from 'lucide-react';
import './Header.css';

const navLinks = [
  { name: 'Home', path: '/', icon: <Home size={18} /> },
  { name: 'About', path: '/about', icon: <User size={18} /> },
  { name: 'Skills', path: '/skills', icon: <Code size={18} /> },
  { name: 'Achievements', path: '/achievements', icon: <Trophy size={18} /> },
  { name: 'Certifications', path: '/certifications', icon: <Award size={18} /> },
  { name: 'Projects', path: '/projects', icon: <Briefcase size={18} /> },
  { name: 'Resume', path: '/resume', icon: <FileText size={18} /> },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container flex items-center justify-between w-full max-w-full px-4 md:px-12 gap-12">
        <div className="logo flex items-center gap-3">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition">Vishesh</Link>
        </div>

        {/* Desktop nav */}
        <nav className="desktop-nav nav flex items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1 rounded-md transition flex items-center gap-2 ${isActive ? 'bg-white/10 text-purple-400' : 'hover:bg-white/5 text-gray-300'
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="px-4 py-1.5 ml-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition flex items-center gap-2"
          >
            <Mail size={18} />
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <div className="mobile-toggle">
          <button
            aria-label="Toggle menu"
            className="p-2 rounded-md text-gray-200 bg-transparent bg-none hover:bg-white/5 border-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="mobile-panel px-4 pb-4">
          <nav className="flex flex-col space-y-2 mt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md transition flex items-center gap-3 ${isActive ? 'bg-white/10 text-teal-400' : 'hover:bg-white/5 text-gray-300'
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block py-2 px-3 mt-4 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
