import React from "react";
import "../Style.css/Footer.css"

import globeIcon from "../assets/Icon (5).png";
import mailIcon from "../assets/Icon (6).png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">


        <div className="footer-left">
          <h2>InternMS</h2>

          <p>
            The ultimate platform for managing
            <br />
            internships, connecting talent, and
            <br />
            building the future of work.
          </p>

          <div className="footer-icons">
            <div className="icon-box">
              <img src={globeIcon} alt="Website" />
            </div>

            <div className="icon-box">
              <img src={mailIcon} alt="Email" />
            </div>
          </div>
        </div>

        <div className="footer-column">
          <h4>Product</h4>

          <a href="#">For Students</a>
          <a href="#">For Employers</a>
          <a href="#">For Universities</a>
          <a href="#">Pricing</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Resources</a>
          <a href="#">Contact Us</a>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2024 InternMS. All rights reserved.</p>

        <p>
          Made with  for the future workforce
        </p>
      </div>
    </footer>
  );
}

export default Footer;