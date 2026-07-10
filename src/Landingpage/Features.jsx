import React from "react";
import "../Style.css/Features.css"
import svgImg from "../assets/Icon.png";
import bgImg from "../assets/Icon (1).png";
import vectorImg from "../assets/Icon (2).png";

function Features() {
  return (
    <section className="features">

      <div className="features-header">

        <div className="features-title">
          <h2>Engineered for Efficiency</h2>

          <p>
            Complex placement workflows simplified into an intuitive, high-speed
            ecosystem designed for scale.
          </p>
        </div>

        <button className="explore-btn">
          Explore all features →
        </button>

      </div>

      <div className="feature-grid">

        <div className="feature-card">

          <div className="icon-box">
            <img src={svgImg} alt="" className="feature-icon" />
          </div>

          <h3>Automated Matching</h3>

          <p>
            Our AI-driven algorithm pairs candidates with their ideal roles based
            on skills, culture fit, and academic requirements.
          </p>

        </div>

        <div className="feature-card">

          <div className="icon-box green">
            <img src={bgImg} alt="" className="feature-icon" />
          </div>

          <h3>Real-time Tracking</h3>

          <p>
            Monitor progress from application to final evaluation with granular
            dashboards for all stakeholders.
          </p>

        </div>

        <div className="feature-card">

          <div className="icon-box gray">
            <img src={vectorImg} alt="" className="feature-icon" />
          </div>

          <h3>Secure Documents</h3>

          <p>
            Enterprise-grade encryption for contracts, NDAs, and compliance
            certifications with automated reminders.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;