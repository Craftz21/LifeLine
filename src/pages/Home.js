import React from "react";
import "../styles/style.css"; 
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <header id="top-contact">
        Contact: <a href="mailto:contact@lifelinehospital.com">contact@lifelinehospital.com</a>
      </header>

      <nav id="navbar">
        <Navbar />
      </nav>

      <main className="home-main">
        <section className="welcome-section">
          <h1 className="home-title">Welcome to LifeLine Hospital</h1>
          <p className="home-subtitle">Your health is our priority.</p>
          <a href="/appointment.html" className="home-btn">Book Appointment</a>
        </section>

        <section className="mission-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            At LifeLine Hospital, we are dedicated to improving lives through
            world-class medical care, innovation, and compassionate service. We
            embrace a patient-first approach, ensuring personalized treatments
            backed by the latest advancements in healthcare.
          </p>
        </section>
      </main>

      <footer>
        <p>
          Contact us: <a href="mailto:contact@lifelinehospital.com">contact@lifelinehospital.com</a>
        </p>
        <p>&copy; 2025 LifeLine Hospital</p>
      </footer>
    </div>
  );
}

export default Home;
