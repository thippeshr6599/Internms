import React from "react";
import "../Style.css/Footer.css"
import globeIcon from "../assets/Web.png";
import mailIcon from "../assets/Gamilwhite.png";
import Heart from "../assets/Heart.png"

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
            <div className="icon-box-Lfoot">
              <img src={globeIcon} alt="Website" style={{width:"30px"}} />
            </div>

            <div className="icon-box-Lfoot">
              <img src={mailIcon} alt="Email"  style={{width:"30px"}} />
            </div>
          </div>
        </div>

        <div className="footer-column-LF">
          <h4>Product</h4>

          <a href="#">For Students</a>
          <a href="#">For Employers</a>
          <a href="#">For Universities</a>
          <a href="#">Pricing</a>
        </div>

        <div className="footer-column-LF">
          <h4>Company</h4>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Resources</a>
          <a href="#">Contact Us</a>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>@ 2024 InternMS. All rights reserved.</p>

        <p>
          Made with <img src={Heart} alt="" style={{width:"10px"}} />  for the future workforce
        </p>
      </div>
    </footer>
  );
}

export default Footer;