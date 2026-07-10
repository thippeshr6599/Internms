import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css/Forgototp.css"
import Forgoticon2 from "../assets/forgoticon2.png"
import Lockicon from "../assets/Lockicon.png"
import Lockicon2 from "../assets/Lockicon2.png"

export default function Forgototp() {
  const inputs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    if (e.target.value.length === 1 && index < 5) {
      inputs.current[index + 1].focus();
    }
  };
  const handleVerify = () => {
  const otp = inputs.current.map((input) => input.value).join("");

  if (otp.length === 6) {
    navigate("/Setnewpassword");
  } else {
    alert("Please enter the complete 6-digit verification code.");
  }
};

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      index > 0
    ) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div className="Content">

      <div className="verify-left">
        <div className="shield-circle">
           <img src={Forgoticon2} alt="" style={{width:"60px", height:"75px"}}/>
        </div>

        <h1>Verify Identity</h1>

        <p>
          We've sent a 6-digit code to your chosen method.
          <br />
          Please enter it to continue.
        </p>
      </div>

      <div className="verify-right">

        <div className="verify-box">

          <h2>Enter Verification Code</h2>

          <p className="sub-text">
            We've sent a 6-digit code to your registered Email and
            phone number. The code will
            <br />
            expire in <span>09:59</span> minutes.
          </p>

          <div className="otp-boxes">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                maxLength="1"
                ref={(el) => (inputs.current[index] = el)}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

           <button className="verify-btn" onClick={handleVerify}>
            Verify and Continue

          </button>

          <p className="resend">
            Didn't receive the code? <b>Resend</b> (in 00:55)
          </p>

          <div className="bottom-line"></div>

          <div className="security">
            <span>
              <img src={Lockicon} alt="" style={{width:"10px", height:"10px"}} />
              END-TO-END ENCRYPTED
            </span>

            <span>
              <img src={Lockicon2} alt="" style={{width:"10px", height:"10px"}} />
              SECURE HANDSHAKE
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}