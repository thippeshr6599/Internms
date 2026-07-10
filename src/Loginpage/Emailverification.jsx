import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css/Emailverification.css"
import Verifyicon from "../assets/Verificationicon.png";
import Righticon from "../assets/Righticon (2).png"
import Backtover from "../assets/Backtover.png";

export default function Emailverification() {
  const navigate = useNavigate();
   const [sec, setSec] = useState(59);

    useEffect(() => {
    if (sec === 0) return;

      const interval = setInterval(() => {
      setSec((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
    }, [sec]);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [Error, setError] = useState("");

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; 

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");

    if (code.length === 6) {
      navigate("/Sucesslogin");
    } else {
      setError ("Enter 6 Digit OTP sent Your Mobile Number");
    }
  };

  return (
    <div className="Content" style={{width:"1300px"}}>
      <div className="left-panel">
        <div className="shield-box1">
           <img src={Verifyicon} alt=""  style={{width:"35px", height:"40px",}}/>

        </div>

        <h1>Security first.</h1>

        <p>
          We take your account security seriously. Verify your identity to
          protect your internship applications and sensitive professional data.
        </p>

        <span>Joined by 10k+ professionals</span>
      </div>


      <div className="right-panelE" style={{marginRight:"100px",marginTop:"100px"}}>
        <div className="verification-box">
          <h2>Enter Verification Code</h2>

          <p className="subtitleE">
            We've sent a 6-digit code to your email
            j**n@g***t.com
          </p>

          <div className="otp-boxes">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
              />
            ))}
          </div>

          {Error && <h3 style={{color:"red", fontSize:"15px",margin:"10px"}}>{Error}</h3>}

          <button className="verify-btn" onClick={handleVerify}>
            Verify Identity 
            <img src={Righticon} alt="" style={{width:"15px",height:"10px"}} />
          </button>

           <p className="resend">
           Didn't receive the code?{" "}
           {sec > 0 ? (
           <span>Resend in 00:{sec.toString().padStart(2, "0")}</span>
           ) : (
           <button
           className="resend-btn"
           onClick={() => setSec(59)}
           >
            Resend Code 
          </button>
           )}
          </p>

          <hr />

          <button className="back-btn">
           <img src={Backtover} alt="" style={{width:"12px", height:"12px"}}/>
           Back to verification options
          </button>

          <a href="/">Contact Support</a>
        </div>
      </div>
    </div>
  );
}