import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode} px-4`}>

        {/* Logo */}
        <Link className="navbar-brand mx-2 " href="/">
          TextUtils
        </Link>

        {/* Search Bar */}
        {/*<form className="d-flex mx-auto" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className={`btn btn-outline-${props.Mode === 'light' ? 'dark' : 'light'}`}
            type="submit"
          >
            Search
          </button>
        </form>*/}

        {/* Navigation Links */}
        <div className="navbar-nav flex-row ms-4">
          <Link className="nav-link active mx-2" to="/">
            <strong>Home</strong>
          </Link>

          <Link className="nav-link active mx-2" to="/about">
            <strong>About</strong>
          </Link>
        </div>
        <div className ="ms-auto">
          <div className={`form-check form-switch text-${props.Mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"  onClick={props.toggleMode} />
            <label className={`form-check-label text-${props.Mode === 'light' ? 'dark' : 'light'}`} htmlFor="switchCheckDefault">Dark Mode</label>
          </div>
          </div>
        </nav>
    </div>
  )
}
