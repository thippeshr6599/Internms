import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style.css/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar-land">
      <div className="logo" style={{color:"#0058BE", marginLeft:"25px"}}>InternMS</div>

      <div className="nav-buttons">
        <span
          className="loginnav"
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