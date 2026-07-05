import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          TextUtils
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>

          {/* Home & About */}
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
          </ul>

          {/* Dark Mode */}
          <div
            className={`form-check form-switch ms-lg-auto mt-3 mt-lg-0 text-${
              props.Mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="switchCheckDefault"
              checked={props.Mode === "dark"}
              onChange={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="switchCheckDefault"
            >
              Dark Mode
            </label>
          </div>

        </div>
      </div>
    </nav>
  );
}