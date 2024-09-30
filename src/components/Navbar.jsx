import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Nav.css';
// import './App.css';
import img1 from '../images/as.jpg'; 

const Navbar = () => {
  const location = useLocation(); // Get the current path

  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <img
              src={img1}
              alt="Profile"
              className="rounded-circle"
              style={{ width: '120px',height:'120px',marginRight: '10px' }}
            />
            <span>Aswathy R V</span>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutme">PROFILE</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/education">EDUCATION</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skill">SKILL</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">PROJECT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/experience">EXPERIENCE</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactme">CONTACT ME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/testmonial">TESTIMONIALS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      
    </div>
  );
};

export default Navbar;
