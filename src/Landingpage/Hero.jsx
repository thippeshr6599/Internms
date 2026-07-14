import React from "react";
import "../Style.css/Hero.css"
import dashboard from "../assets/Internship Management Dashboard.png";
import successIcon from "../assets/Icon (4).png";
import Star from "../assets/Landingpagestar.png"
import Righticon from "../assets/Righticon (2).png"
import { useNavigate } from "react-router-dom";

function Hero() {

     const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-left">

        <div className="hero-badge">
          <img src={Star} alt="" style={{width:"15px", height:"15px"}} /> Next-Generation Placement OS
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
          <button className="primary-btn" onClick={() => navigate("/Createaccount")}>
            Get Started
            <span> <img src={Righticon} alt="" style={{width:"20px", height:"15px"}} /></span>
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