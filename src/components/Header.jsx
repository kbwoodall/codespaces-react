// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>My Dashboard</h1>
      <div className="user-info">
        <p>Welcome, User</p>
      </div>
    </header>
  );
};

export default Header;
