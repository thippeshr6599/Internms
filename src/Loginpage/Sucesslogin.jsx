import React from 'react'
import { useNavigate } from "react-router-dom";
import "../Login.css/Sucesslogin.css"
import successImg from "../assets/success page.png";
import Verifyicon from "../assets/Verificationicon.png";
import Righticon from "../assets/Righticon.png"

export default function Sucesslogin() {
const navigate = useNavigate();

    const handleLogin = () => {
    navigate("/Loginmainpage");
  };


  return (
    <div className="Content" style={{width:"1250px"}} >


      <div className="left-panel">

        <div className="check-circle">
          <div className="inner-circle">
             <img src={Righticon} alt="" style={{width:"50px", height:"50px", background:"blue"}}/>
          </div>
        </div>

        <h1>You are Logged in successfully</h1>

        <p>
          Your security is our priority. You can now use our website.
        </p>

        <img
          src={successImg}
          alt="Success"
          className="success-image"
        />
      </div>

      <div className="right-panel">

        <div className="status" style={{marginRight:"300px"}}>

          <span>Action Complete</span>
        </div>

        <h2 style={{marginRight:"300px"}}>Log-in Sucessfull</h2>

        <p className="description">
          Your have been Logged-in. To keep your account
          secure, we recommend not sharing your password with
          anyone.
        </p>

        <button className="login-btn" onClick={handleLogin}>

          <span>Back to Login</span>

        </button>

        <hr />

      </div>

    </div>
  );
}
