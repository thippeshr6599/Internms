import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css/Forgotpassword.css"
import Forgotimg from "../assets/Forgot.png"


export default function Forgot() {
  const [selected, setSelected] = useState("email");
  const navigate = useNavigate();
  const handleSendCode = () => {
  if (selected === "email") {
    alert("Verification code sent to your email.");
    navigate("/Forgototp");
  } else {
    alert("Verification code sent to your mobile.");
    navigate("/forgototp");
  }
};

  return (
    <div className="Content">

      <div className="forgot-left">

        <div className="left-text">
          <h1 style={{fontSize:"40px"}}>
            Regain access to
            <br />
            your professional
            <br />
            future.
          </h1>

          <p>
            We're here to help you get back on track. Secure your account and
            continue exploring the best internship opportunities worldwide.
          </p>
        </div>

        <div className="left-footer">
          <span>@ 2024 InternMS</span>
          <span>•</span>
          <span>Privacy Policy</span>
        </div>

      </div>


      <div className="forgot-right">

        <div className="top-links">
          <span>Help</span>
          <span onClick={() => navigate("/")}>Login</span>
        </div>

        <div className="form-box">

          <div className="icon-box">
              <img src={Forgotimg} alt="" style={{width:"30px", height:"30px"}} />
          </div>

          <h2 style={{fontSize:"30px"}}>Forgot Password?</h2>

          <p className="sub-text">
            Choose your preferred method to receive a one-time verification
            code.
          </p>

          <h4>Verification Method</h4>


          <div
            className={`option ${selected === "email" ? "active" : ""}`}
            onClick={() => setSelected("email")}
          >
            <div className="radio">
              <div className="dot"></div>
            </div>

            <div className="option-text">
              <h3 style={{marginRight:"100px"}}>
                Email Address
              </h3>
              <p >Send code to j**n@g***l.com</p>
            </div>
          </div>


          <div
            className={`option ${selected === "sms" ? "active" : ""}`}
            onClick={() => setSelected("sms")}
          >
            <div className="radio">
              <div className="dot"></div>
            </div>

            <div className="option-text">
              <h3 style={{marginRight:"50px"}}>
               SMS / Text Message
              </h3>
              <p>Send code to +91 9****5678</p>
            </div>
          </div>

          <button
              className="send-btn"
              onClick={handleSendCode}
              >
              Send Verification Code

            </button>

          <div className="back-btn" onClick={() => navigate("/")}>

            Back to Login
          </div>

        </div>

      </div>

    </div>
  );
}