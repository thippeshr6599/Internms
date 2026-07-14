import React from "react"
import Teamicon from "../assets/Internship MS-page-1.png"
import HRimg from "../assets/HR.png"
import Mentor from "../assets/Mentor.png"
import Intern from "../assets/Intern.png"
import Company from "../assets/Company.png"
import EyeIcon from "../assets/Eyeicon.png";
import Internhub from "../assets/Internhub inside.png"
import "../Signup.css/Createaccount.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Createaccount() {
  const navigate = useNavigate();
     const [showPassword, setShowPassword] = useState(false);
     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
     const [formData, setformData] = useState ({
       username :"",
       email :"",
       number:"",
       company:"",
       password:"",
       confirmpassword:"",
       terms :""
     })
     const [Error, setError] = useState("");
     const handlechange =(e) => {
       const {name,value,type,checked} = e.target;
         setformData({
          ...formData,
          [name] : type === "checkbox" ? checked : value
         });
     }
     const handlesubmit = (e) => {
          e.preventDefault();
          if ( !formData.username || !formData.email || !formData.number || !formData.company ||!formData.password || !formData.confirmpassword ){
             setError("All fields are required");
             return;
          }
          if (!formData.username){
            setError("Full name Required");
            return;
          }
          if (!formData.email){
             setError("Enter your email");
             return;
          }
          if (!formData.number){
            setError("Enter your 10-digit number");
            return;
          }
          if (formData.number.length !== 10) {
          setError("Enter a valid 10-digit phone number");
           return;
          }
          if (!formData.company){
            setError("Enter your company name ");
            return;
          }
          if (!formData.password || !formData.confirmpassword){
            setError("Password is required")
          }
          if (!formData.terms){
            setError("Accept the check box");
            return;
          }
          if (formData.password !== formData.confirmpassword) {
            setError("Password and Confirm Password should match");
             return;
          }

          setError("");
          alert(" Sucessfully created your account")
          navigate("/Loginmainpage");

         }
  return (
  <div className="Content" style={{height:"900px"}}>
    <div className="Left-content">
    <div className="logoC">
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
    <div className="statsC">
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

      <div 
      className="Icon1 active"
      onClick={() => navigate("/Createaccount")}
      
      >
        <img src={HRimg} alt="" />
        <span>HR</span>
      </div>

      <div
       className="Icon1"
       onClick={() => navigate("/Mentor")}
       style={{ cursor: "pointer" }}
      >
       <img src={Mentor} alt="" />
       <span>Mentor</span>
      </div>

      <div
       className="Icon1"
       onClick={() => navigate("/Intern")}
       style={{ cursor: "pointer" }}
       >
       <img src={Intern} alt="" />
       <span>Intern</span>
       </div>


        <div
          className="Icon1"
          onClick={() => navigate("/Company")}
          style={{ cursor: "pointer" }}
        >
       <img src={Company} alt="" />
       <span>Company</span>
       </div>

     </div>

    </div>

  <form className="form-area" onSubmit={handlesubmit}>

    <div className="form-group">
      <label>Full Name <span style={{color:"red"}}>*</span></label>
      <input 
      type="text" 
      name = "username"
      value={formData.username}
      onChange={handlechange}
      placeholder="John Doe" />
    </div>

    <div className="form-group">
      <label>Work Email Address <span style={{color:"red"}}>*</span> </label>
      <input 
      type="email" 
      name = "email"
      value={formData.email}
      onChange={handlechange}
      placeholder="john.doe@company.com" />
    </div>

    <div className="form-group">
      <label>Phone Number <span style={{color:"red"}}>*</span></label>

      <div className="phone-box">
        <select>
          <option>+91</option>
        </select>

      <input
         type="tel"
         maxLength={10}
         name="number"
         value={formData.number}
         onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "").slice(0, 10);
             setformData({ ...formData, number: value });
           }}
         placeholder="Enter your number"
         />
      </div>
    </div>

    <div className="form-group">
      <label>Department <span style={{color:"red"}}>*</span></label>

      <select>
        <option>Select department</option>
      </select>
    </div>
      
      <div className="form-group company-group">
      <label>
       Company Name <span style={{ color: "red" }}>*</span>
      </label>

      <div className="company-box">
      <img src={Internhub} alt="Company Icon" className="company-icon" />

      <input
       type="text"
       name="company"
       value={formData.company}
       onChange={handlechange}
       placeholder="InternHub Inc."
      />
      </div>
      </div>

    <div className="form-group">
      <label>Password <span style={{color:"red"}}>*</span></label>

      <div className="password-box">
        <input
          type={showPassword ? "text" : "password"}
          name = "password"
          value={formData.password}
          onChange={handlechange}
          placeholder="Create a strong password"
        />
        <img
         src={EyeIcon}
         alt="Toggle Password"
         className="eye-icon"
         onClick={() => setShowPassword(!showPassword)}
         style={{width:"20px",height:"13px"}}
         />
        <span></span>
      </div>
    </div>

    <div className="form-group">
      <label>Confirm Password <span style={{color:"red"}}>*</span></label>

      <div className="password-box">
        <input
          type={showConfirmPassword ? "text" : "password"}
          name = "confirmpassword"
          value={formData.confirmpassword}
          onChange={handlechange}
          placeholder="Confirm your password"
        />
         <img
         src={EyeIcon}
         alt="Toggle Password"
         className="eye-icon"
         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
         style={{width:"20px",height:"13px"}}
         />
        <span></span>
      </div>
    </div>
    <div className="agree">
     <input
      type="checkbox"
      name="terms"
      checked={formData.terms}
      onChange={handlechange}
     />

     <p>
       I agree to the <span>Terms of Service</span> and
      <span> Privacy Policy</span>
     </p>
     </div>
     {Error && <h3 style={{color:"red", fontSize:"15px", marginTop:"10px",textAlign:"center"}}> <span style={{color:"red"}}>*</span> {Error}</h3>}

    <div className="button-row">
      <button type="submit" className="create-btn">
        Create Account
      </button>
     </div>
  </form>
  <div className="dividerC">
    <hr />
    <span></span>
    OR
    <span></span> 
    <hr />
  </div>

  <p className="signin1">
    Already have an account?
    <span onClick={() => navigate("/Loginmainpage")}> Sign In</span>
    </p>

   </div>
   </div>
  );
}
 