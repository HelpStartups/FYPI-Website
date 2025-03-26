import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/images/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="C-Summit'25 Logo" />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link
              to="/"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/sponsors"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Partners
            </Link>
          </li>
          <li>
            <Link
              to="/speakers"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Speakers
            </Link>
          </li>
          <li>
            <Link
              to="/tickets"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Tickets
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
