import React from "react";
import "../Style.css/Hero.css"
import dashboard from "../assets/Internship Management Dashboard.png";
import successIcon from "../assets/Icon (4).png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <div className="hero-badge">
          ✦ Next-Generation Placement OS
        </div>

        <h1>
          Seamless <br />
          Internships.
          <br />
          <span>Smarter</span>
          <br />
          <span>Management.</span>
        </h1>

        <div className="hero-line"></div>

        <p>
          Bridging the gap between ambitious talent and global opportunities.
          The definitive operating system for universities, students, and
          world-class employers.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started
            <span>→</span>
          </button>

          <button className="secondary-btn">
            Book a Demo
          </button>
        </div>

      </div>

      <div className="hero-right">

        <div className="image-box">
          <img src={dashboard} alt="Dashboard" />
        </div>

        <div className="success-card">
          <div className="icon">
            <img src={successIcon} alt="Success Icon" />
          </div>

          <div>
            <small>Success Rate</small>
            <h3>+24% Increase</h3>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;