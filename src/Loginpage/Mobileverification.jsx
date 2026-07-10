import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css/Mobileverification.css"
import Verifyicon from "../assets/Verificationicon.png"
import Righticon from "../assets/Righticon (2).png"
import Backtover from "../assets/Backtover.png";


export default function Mobileverification() {
  const inputs = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length === 6) {
      navigate("/Sucesslogin");
    } else {
      alert("Please enter the 6-digit verification code.");
    }
  };

  return (
    <div className="Content">

      <div className="mobile-left">
            <div className="shield-boxM">
                <img src={Verifyicon} alt=""  style={{width:"35px", height:"40px"}}/>
         
              </div>

        <h1>Security first.</h1>

        <p>
          We take your account security seriously. Verify your
          identity to protect your internship applications and
          sensitive professional data.
        </p>

        <span>Joined by 10k+ professionals</span>
      </div>

      <div className="mobile-right">
        <h1>Enter Verification Code</h1>

        <p className="subtitle">
          We've sent a 6-digit code to your mobile number
          <strong> +91 9•••• 5678</strong>
        </p>

        <div className="otp-boxes">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              ref={(el) => (inputs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <button className="verify-btn" onClick={handleVerify} style={{padding:"10px"}}>
          Verify Identity  <img src={Righticon} alt="" style={{width:"16px",height:"15px"}} />
        </button>

        <p className="resend">
          Didn't receive the code?
          <span> Resend in 00:58</span>
        </p>

        <hr />

        <button className="back-btn">
          <img src={Backtover} alt="" style={{width:"12px", height:"12px"}}/>
          Back to verification options
        </button>

        <a href="/">Contact Support</a>
      </div>

    </div>
  );
}