import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <header id="top-contact">
        Contact: <a href="mailto:contact@lifelinehospital.com">contact@lifelinehospital.com</a>
      </header>

      <nav id="navbar">
        <Navbar />
      </nav>

      <main className="about-main">
        <div className="about-section">
          <h2 className="section-title">About LifeLine Hospital</h2>
          <p className="section-text">
            LifeLine Hospital has served our community with integrity, innovation, and compassion for over 20 years. We deliver world-class healthcare while ensuring each patient feels heard, respected, and cared for.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Our History</h2>
          <p className="section-text">
            Founded in 2003, LifeLine Hospital started as a small clinic and has since evolved into a state-of-the-art medical center with over 500 beds, advanced ICUs, and globally recognized specialists. We've grown through trust and the passion of our team.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">🌟 Our Core Values</h2>
          <ul className="core-values">
            <li>💙 Compassionate Care</li>
            <li>💡 Innovation and Excellence</li>
            <li>🤝 Respect and Integrity</li>
            <li>🧠 Patient Education</li>
            <li>🌍 Community Involvement</li>
          </ul>
        </div>

        <section className="about-section cards">
          <div className="info-card">
            <h3>500+</h3>
            <p>Qualified Staff</p>
          </div>
          <div className="info-card">
            <h3>24/7</h3>
            <p>Emergency Services</p>
          </div>
          <div className="info-card">
            <h3>20+</h3>
            <p>Specialty Departments</p>
          </div>
          <div className="info-card">
            <h3>95%</h3>
            <p>Patient Satisfaction</p>
          </div>
        </section>
      </main>

      <footer>
        <p>Contact us: <a href="mailto:contact@lifelinehospital.com">contact@lifelinehospital.com</a></p>
        <p>&copy; 2025 LifeLine Hospital</p>
      </footer>
    </div>
  );
}

export default About;
