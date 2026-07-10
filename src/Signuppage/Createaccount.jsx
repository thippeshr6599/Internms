import React from "react";
import Teamicon from "../assets/Internship MS-page-1.png"
import Vector from "../assets/Vector.png"
import Vector1 from "../assets/Vector (1).png"
import Vector2 from "../assets/Vector (2).png"
import Vector3 from "../assets/Vector (3).png"
import "../Signup.css/Createaccount.css"

export default function Createaccount() {
  return (
  <div className="Content" style={{height:"900px"}}>
    <div className="Left-content">
    <div className="logo">
      <h3>InterMS</h3>
    </div>
     <div className="hero-content">
    <h1>Empower your team with top-tier talent.</h1>
    <p>
      Streamline your recruitment process, manage internships with ease,
      and connect with the next generation of industry leaders.
    </p> 
     </div>
    <div className="dashboard-card">
    <div className="card-header">
      <div className="icon-box" style={{marginTop:"1px"}}>
        <img src={Teamicon} alt="Team Icon" />
      </div>

    <div className="text-content">
      <h3>Unified Talent Dashboard</h3>
      <p>Monitor all applications in real-time.</p>
    </div>
    </div>
    <div className="progress-section">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <div className="progress-info">
          <span>75% Efficiency Boost</span>
          <span>120+ Placements</span>
        </div>
      </div>
    </div>
    <div className="stats">
    <div>
      <h2>500+</h2>
      <p>COMPANIES</p>
    </div>

    <div>
      <h2>10k+</h2>
      <p>STUDENTS</p>
    </div>

     </div>

    </div>
   {/* Right Content Start */}
    
  <div className="Right-content">

  <div className="Right-head">
    <h2>Create your HR account</h2>
    <p>Join our ecosystem of professional employers.</p>
  </div>

  <div className="register-section">
    <p className="register-title">Registering as</p>

    <div className="Icon-group">

      <div className="Icon1 active">
        <img src={Vector} alt="" />
        <span>HR</span>
      </div>

      <div className="Icon1">
        <img src={Vector1} alt="" />
        <span>Mentor</span>
      </div>

      <div className="Icon1">
        <img src={Vector2} alt="" />
        <span>Intern</span>
      </div>

      <div className="Icon1">
        <img src={Vector3} alt="" />
        <span>Company</span>
      </div>

    </div>
  </div>

  <form className="form-area">

    <div className="form-group">
      <label>Full Name *</label>
      <input type="text" placeholder="John Doe" />
    </div>

    <div className="form-group">
      <label>Work Email Address *</label>
      <input type="email" placeholder="john.doe@company.com" />
    </div>

    <div className="form-group">
      <label>Phone Number *</label>

      <div className="phone-box">
        <select>
          <option>+91</option>
        </select>

        <input
          type="text"
          placeholder="Enter your number"
        />
      </div>
    </div>

    <div className="form-group">
      <label>Department *</label>

      <select>
        <option>Select department</option>
      </select>
    </div>

    <div className="form-group full">
      <label>Company Name *</label>
      <input type="text" placeholder="InternHub Inc." />
    </div>

    <div className="form-group">
      <label>Password *</label>

      <div className="password-box">
        <input
          type="password"
          placeholder="Create a strong password"
        />
        <span></span>
      </div>
    </div>

    <div className="form-group">
      <label>Confirm Password *</label>

      <div className="password-box">
        <input
          type="password"
          placeholder="Confirm your password"
        />
        <span></span>
      </div>
    </div>

  </form>

  <div className="agree">
    <input type="checkbox" />
    <p>
      I agree to the
      <span> Terms of Service </span>
      and
      <span> Privacy Policy</span>
    </p>
  </div>

  <button className="create-btn">
    Create Account
  </button>

  <div className="divider">
    <span></span>
    OR
    <span></span> 
  </div>

  <p className="signin1">
    Already have an account?
    <span> Sign In</span>
  </p>

   </div>
      
    </div>
  );
}