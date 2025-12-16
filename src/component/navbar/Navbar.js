import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/javascript';
    }
    return location.pathname === path;
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/javascript" className="nav-logo" onClick={closeMenu}>
          <i className="fas fa-code"></i>
          <span>Devs</span>
        </Link>

        <button 
          className={`nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu-wrapper ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/javascript" 
                className={`nav-link ${isActive('/javascript') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <i className="fas fa-user"></i>
                <span>About</span>
              </Link>
            </li>
          </ul>
          
          <div className="nav-divider"></div>
          
          <ul className={`nav-menu nav-menu-social ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a 
                href="https://www.linkedin.com/in/mostafa-sultan/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link nav-link-social"
                onClick={closeMenu}
              >
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/mostafa-sultan/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link nav-link-social"
                onClick={closeMenu}
              >
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
