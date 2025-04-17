import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <Link to="/">
          {/* <video
            className="logo-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="public/logo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <img
            src="public/Untitled design.gif"
            style={{ width: "160px" }}
            className="logo-img"
          />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Right: Icons and Links */}
      <div className={`navbar-right ${isMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={`nav-link ${currentPath === "/" ? "active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <img src="/login.png" alt="Login Icon" className="icon" />
          Sign In/Log In
        </Link>

        <Link
          to="/about"
          className={`nav-link ${currentPath === "/about" ? "active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <img src="/image.png" alt="Bag Icon" className="icon" />
          My Bag
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
