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

        <div className="left-panel-Two">
          <div className="left-text-Two">
            <h1>Secure Your Account</h1>

            <p>
              Protecting your professional profile and
              application history is our top priority.
              Choose a method to verify your identity.
            </p>

            <div className="security-box-Two">
              <div className="shield-Two">
                 <img src={Secure} alt="Secureicon" />
              </div>

              <div className="security-two-data">
                <h4>256-bit Encryption</h4>
                <span>Bank-grade security standards</span>
              </div>
            </div>
          </div>

          <div className="copyright-Two">
            @ 2024 InternMS
          </div>
        </div>
        <div className="right-panel-Two">
          <div className="right-content-Two">
            <div className="verify-card-Two">

            <h1>Two-Step Verification</h1>

            <p>
              Choose how you'd like to verify your identity.
            </p>

            <div
              className={selected === "email" ? "option-Two active-Two" : "option-Two"}
              onClick={() => setSelected("email")}
            >
              <div className="option-left-Two">
                <div className="icon-box-Two">
                    <img src={Gmaili} alt="" style={{width:"20px",height:"16px"}} />
                </div>

                <div>
                  <h3>Email Verification</h3>
                  <p>j***@g***l.com</p>
                </div>
              </div>

              <div className="radio-Two">
                {selected === "email" && <div className="dot-Two"></div>}
              </div>
            </div>

            <div
              className={selected === "mobile" ? "option-Two active-Two" : "option-Two"}
              onClick={() => setSelected("mobile")}
            >
              <div className="option-left-Two">
                <div className="icon-box-Two">
                     <img src={Mobilei} alt="" style={{width:"15px",height:"25px"}}  />
                </div>

                <div>
                  <h3>Mobile Verification</h3>
                  <p>+91 9***5678</p>
                </div>
              </div>

              <div className="radio-Two">
                {selected === "mobile" && <div className="dot-Two"></div>}
              </div>
            </div>

            <button className="send-btn-Two" onClick={handleSendCode}>
              Send Verification Code
             <img src={Righticon} alt="" style={{color:"#FFFFFF",width:"9.33px",height:"9.33px"}} />
            </button>

            <div className="back-Two" onClick={handleBack}>
               <img src={Leftarrow} alt="" style={{color:"#3525CD",width:"12px", height:"12px",marginRight:"5px"}} />
                Back to Login
            </div>

            <hr />

            <p className="help-Two">
              Need help? <span>Contact Support</span>
            </p>

          </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Twostepverification;