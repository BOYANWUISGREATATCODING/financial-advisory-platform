import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">Markets</li>
        <li className="navbar-item">Business</li>
        <li className="navbar-item">Investing</li>
        <li className="navbar-item">Tech</li>
        <li className="navbar-item">Politics</li>
      </ul>
    </nav>
  );
};

export default Navbar;
