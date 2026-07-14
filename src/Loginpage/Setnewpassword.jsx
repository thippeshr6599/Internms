import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css/Setnewpassword.css"
import Newpicon from "../assets/Newpasswordicon.png"
import Newpasslock from "../assets/Newpasslock.png"
import Lockicon from "../assets/Lockicon.png"
import Righticon1 from "../assets/PassRight.png"
import Rightarrow from "../assets/Righticon (2).png"

export default function Setnewpassword() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();

  const isLength = password.length >= 8;
  const isMatch = password !== "" && password === confirm;

  const handleUpdate = () => {
    if (!isLength || !isMatch) {
      alert("Please enter a valid password.");
      return;
    }

    navigate("/Passrestsucess");
  };

  return (
    <div className="Content-Setnew">

      <div className="new-left">
        <div>
          <h1>
            Secure your <br /> account.
          </h1>

          <p>
            Ensure your career progress is protected. Set a strong password to
            continue your journey with InternHub.
          </p>
        </div>

        <div className="shield-box">
           <img src={Newpicon} alt="" style={{width:"100px", height:"100px",marginleft:"200px"}} />
        </div>

        <div className="footer-text">
          @ 2024 InternMS • Privacy Policy
        </div>
      </div>


      <div className="new-right">
        <div className="form-box">
          <div className="top-icon">
            <img src={Newpasslock} alt="" style={{width:"30px", height:"30px"}} />
          </div>

          <h2>Set New Password</h2>

          <p className="sub-text">
            Your new password must be different from previous passwords.
          </p>

          <label>New Password</label>

           <div className="input-wrapper">
                <img src={Lockicon} alt="Lock" className="input-icon" />

                <input
                type={showPass ? "text" : "password"}
                 placeholder="Min. 8 characters"
                value={password}
                 onChange={(e) => setPassword(e.target.value)}
               />
           </div>

          <label>Confirm New Password</label>

          <div className="input-wrapper">
  
            <img src={Righticon1} alt="Lock" className="input-icon"/>
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Repeat your password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />

            <span onClick={() => setShowConfirm(!showConfirm)}>
            </span>
          </div>

          <div className="condition-box">
            <div className={isLength ? "valid" : ""}>
              <span>○</span> At least 8 characters
            </div>

            <div className={isMatch ? "valid" : ""}>
              <span>○</span> Passwords match
            </div>
          </div>

          <button className="update-btn" onClick={handleUpdate}>
            Update Password <img src={Rightarrow} alt="" style={{width:"18",height:"12px"}}/>
          </button>

          <button
            className="back-btn"
            onClick={() => navigate("/Loginmainpage")}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}