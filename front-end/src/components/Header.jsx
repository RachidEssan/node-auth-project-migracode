import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

function Header() {
  return (
    <div className="header">
      <nav class="nav nav-justified">
        <a class="nav-item text-light nav-link" href="/">
          Home
        </a>
        <a class="nav-item text-light nav-link" href="/">
          Dashboard
        </a>
        <a class="nav-item text-light nav-link" href="/">
          FAQs
        </a>
        <a class="nav-item text-light nav-link" href="/">
          About
        </a>
      </nav>

      <Link exacte to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <h1 className="title">Welcome to our identity confirmation website!</h1>
    </div>
  );
}

export default Header;
