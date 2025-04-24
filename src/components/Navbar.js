import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import "../styles/style.css"; // Ensure this path is correct

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <FontAwesomeIcon icon={faHospital} className="logo-icon" />
        <span className="site-title"> LIFELINE</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="/departments.html">Departments</a></li>
        <li><a href="/services.html">Services</a></li>
        <li><a href="/gallery.html">Gallery</a></li>
        <li><a href="/appointment.html">Appointment</a></li>
        <li><a href="/signup.html">Sign Up</a></li>
        <li><a href="/admin-login.html">Admin</a></li>
        <li><a href="/signin.html">Sign In</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
