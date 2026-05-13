import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <Link to="/" className="logo-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              className="logo-image"
              alt="Logo"
            />
          </Link>
          <div className="action-buttons">
            <a
              href="https://github.com/rehmanhaseeb2345"
              target="_blank"
              rel="noreferrer"
              className="btn-login"
            >
              View Work
            </a>
            <Link to="/contact" className="btn-get-started">
              Get started
            </Link>
          </div>
          <div className="menu-container" id="mobile-menu-2">
            <ul className="menu-list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "nav-link-active" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "nav-link-active" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "nav-link-active" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
