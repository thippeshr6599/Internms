import React from "react";
import { useNavigate } from "react-router-dom";
import "../Components-Landingpage/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar-land">
      <div className="logo">InternMS</div>

      <div className="nav-buttons">
        <span
          className="loginnav"
          onClick={() => navigate("/Loginmainpage")}
          style={{ cursor: "pointer" }}
        >
          Login
        </span>

        <button onClick={() => navigate("/HRaccount")}>Register</button>
      </div>
    </nav>
  );
}

export default Navbar;