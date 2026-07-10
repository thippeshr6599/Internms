import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style.css/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" style={{color:"#302b92"}}>InternMS</div>

      <div className="nav-buttons">
        <span
          className="login"
          onClick={() => navigate("/Loginmainpage")}
          style={{ cursor: "pointer" }}
        >
          Login
        </span>

        <button onClick={() => navigate("/Createaccount")}>Register</button>
      </div>
    </nav>
  );
}

export default Navbar;