import React from 'react'
import { useNavigate } from "react-router-dom";
import "../Login.css/Sucesslogin.css"
import successImg from "../assets/success page.png";
import Verifyicon from "../assets/Verificationicon.png";
import Righticon from "../assets/Rightmark.png"

export default function Sucesslogin() {
const navigate = useNavigate();

    const handleLogin = () => {
    navigate("/Loginmainpage");
  };


  return (
    <div className="Content-Sucesslogin" style={{width:"1250px"}} >


      <div className="left-panel-Sucesslogin">

        <div className="check-circle-Sucess">
          <div className="inner-circle-Sucess">
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

      <div className="right-panel-Sucesslogin">

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
        <div>
           <p onClick={() => navigate("/")}>Land</p>
           <p onClick={() => navigate("/Admin")}> Admin</p>
        </div>
      </div>

    </div>
  );
}
