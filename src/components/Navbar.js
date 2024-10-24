import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import './Navbar.css';
import lightLogo from '../assets/images/autodealer-logo-light.png';
import darkLogo from '../assets/images/autodealer-logo-dark.png';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const logo = theme === 'light' ? lightLogo : darkLogo;

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Auto Dealer Logo" className="logo-image" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for cars..." />
        <button className="search-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
      <nav>
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/inventory" className={isActive('/inventory')}>Buy a Car</Link>
        <Link to="/contact" className={`btn-primary ${isActive('/contact')}`}>Sell a Car</Link>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;