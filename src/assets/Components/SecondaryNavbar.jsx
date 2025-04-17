import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SecondaryNavbar.css"; // Import CSS

const SecondaryNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="secondary-navbar">
      <div className="nav-scroll-container">
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={currentPath === '/new' ? "active" : ""}
            >
              Regular Fit
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={currentPath === '/new' ? "active" : ""}
            >
              Plus Size
            </Link>
          </li>
          <li>
            <Link
              to="/funkey"
              className={currentPath.startsWith("/funkey") ? "active" : ""}
            >
              Funkey
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={currentPath === '/new' ? "active" : ""}
            >
              Typography
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={currentPath === '/new' ? "active" : ""}
            >
              Pride
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={currentPath === '/new' ? "active" : ""}
            >
              Anime
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={currentPath === '/new' ? "active" : ""}
            >
              Super Hero
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
