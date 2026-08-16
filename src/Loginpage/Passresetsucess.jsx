import React from "react";
import { useNavigate } from "react-router-dom";
import "../Loginpage/Passresetsucess.css"
import Sucessicon from "../assets/Rightmark.png"
import successImg from "../assets/success page.png";
import Passright from "../assets/Passicon.png"

export default function Passresetsucess() {
  const navigate = useNavigate();

    const handleLogin = () => {
    navigate("/Loginmainpage");
  };


  return (
    <div className="Content-Resetpass">


      <div className="left-panel-Resetpass">

        <div className="check-circle-Resetpass">
          <div className="inner-circle-Resetpass">
            <img src={Sucessicon} alt="Sucessicon" style={{width:"53.33px",height:"53.33px"}} />
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

      <div className="right-panel-Resetpass">

        <div className="status-Resetpass">

          <span><img src={Passright} style={{width:"15px",height:"15px",marginTop:"5px"}}/> Action Complete</span>
        </div>

        <h2>Success</h2>

        <p className="description">
          Your password has been updated. To keep your account
          secure, we recommend not sharing your password with
          anyone.
        </p>

        <button className="login-btn-Reset" onClick={handleLogin}>

          <span>Back to Login</span>

        </button>

        <hr />

      </div>

    </div>
  );
}