import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css/Twostepverification.css"
import Secure from "../assets/Whiteshield.png";
import Mobilei from "../assets/mobileicon.png";
import Gmaili  from  "../assets/gmail.png";
import Leftarrow from "../assets/Leftarrow.png"
import Righticon from "../assets/Righticon (2).png"


function Twostepverification() {
  const [selected, setSelected] = useState("email");
  const navigate = useNavigate();

 const handleSendCode = () => {
  if (selected === "email") {
    alert("Verification code sent to your email.");
    navigate("/emailverification");
  } else {
    alert("Verification code sent to your mobile.");
    navigate("/Mobileverification");
  }
};
  const handleBack = () => {
    
    navigate("/");
  };

  return (
    <div>
      <div className="Content-Two">

        <div className="left-panel">
          <div className="left-text1">
            <h1 style={{fontSize:"30px",marginRight:"20px",marginLeft:"20px",marginTop:"50px"}}>Secure Your Account</h1>

            <p style={{fontSize:"15px",marginLeft:"20px"}}>
              Protecting your professional profile and
              application history is our top priority.
              Choose a method to verify your identity.
            </p>

            <div className="security-box" style={{marginLeft:"20px"}}>
              <div className="shield">
                 <img src={Secure} alt="Secureicon" style={{width:"20px", height:"25px"}}/>
              </div>

              <div>
                <h4 style={{fontSize:"13px"}}>256-bit Encryption</h4>
                <span style={{fontSize:"12px"}}>Bank-grade security standards</span>
              </div>
            </div>
          </div>

          <div className="copyright2" style={{fontSize:"10px",marginTop:"190px",marginRight:"250px",marginLeft:"20px"}}>
            @ 2024 InternMS
          </div>
        </div>
        <div className="right-panel">
          <div className="verify-card">

            <h1 style={{fontSize:"24px",marginTop:"100px"}}>Two-Step Verification</h1>

            <p className="subtitle" style={{fontSize:"15px"}}>
              Choose how you'd like to verify your identity.
            </p>

            <div
            style={{height:"75px"}}
              className={selected === "email" ? "option active" : "option"}
              onClick={() => setSelected("email")}
            >
              <div className="option-left">
                <div className="icon-boxT">
                    <img src={Gmaili} alt="" style={{width:"20px",height:"20px"}} />
                </div>

                <div>
                  <h3>Email Verification</h3>
                  <p>j***@g***l.com</p>
                </div>
              </div>

              <div className="radio">
                {selected === "email" && <div className="dot"></div>}
              </div>
            </div>

            <div
            style={{height:"75px"}}
              className={selected === "mobile" ? "option active" : "option"}
              onClick={() => setSelected("mobile")}
            >
              <div className="option-left">
                <div className="icon-boxT">
                     <img src={Mobilei} alt="" style={{width:"15px",height:"25px"}}  />
                </div>

                <div>
                  <h3>Mobile Verification</h3>
                  <p>+91 9***5678</p>
                </div>
              </div>

              <div className="radio">
                {selected === "mobile" && <div className="dot"></div>}
              </div>
            </div>

            <button className="send-btn" onClick={handleSendCode}>
              Send Verification Code
             <img src={Righticon} alt="" style={{width:"15px",height:"10px"}} />
            </button>

            <div className="back" onClick={handleBack}>
               <img src={Leftarrow} alt="" style={{width:"15px", height:"10px",marginRight:"5px"}} />
                Back to Login
            </div>

            <hr />

            <p className="help">
              Need help? <span>Contact Support</span>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Twostepverification;