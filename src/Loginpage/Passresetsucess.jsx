import React from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css/Passresetsucess.css"
import Sucessicon from "../assets/sucess1.png"
import successImg from "../assets/success page.png";

export default function Passresetsucess() {
  const navigate = useNavigate();

    const handleLogin = () => {
    navigate("/Loginmainpage");
  };


  return (
    <div className="Content" style={{width:"1250px"}} >


      <div className="left-panel">

        <div className="check-circle">
          <div className="inner-circle">
            <img src={Sucessicon} alt="" style={{width:"50px", height:"50px" ,backgroundColor:"blue"}}/>
          </div>
        </div>

        <h1>Password reset successfully</h1>

        <p>
          Your security is our priority. You can now log in with
          your new credentials.
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

        <h2 style={{marginRight:"300px"}}>Success</h2>

        <p className="description">
          Your password has been updated. To keep your account
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