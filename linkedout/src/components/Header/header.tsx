import React from 'react';
import Image from 'next/image';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Image
          src="/LinkedOut Branco.png"
          alt="LinkedOut Logo"
          className="logo-image"
          fill
          priority
        />
      </div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        <div className="auth-links">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
