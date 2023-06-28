import React, { useState } from 'react';
import Logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-secondary">
      <Link className="navbar-brand mr-4" to="/">
        <img src={Logo} alt="Logo" width="50" height="40" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded={isNavOpen}
        aria-label="Toggle navigation"
        onClick={toggleNav}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calculator">
              Calculation
            </Link>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
