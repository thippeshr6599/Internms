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
       department:"",
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
          if ( !formData.username || !formData.email || !formData.number || !formData.department || !formData.company ){
             setError("All fields are required");
             return;
          }

          if (formData.number.length !== 10) {
          setError("Enter a valid 10-digit phone number");
           return;
          }

          if (!formData.password || !formData.confirmpassword){
            setError("Create your password");
            return;
          }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/~`]).{8,}$/;
         if (!passwordRegex.test(formData.password)) {
          setError( "Use 8+ characters, including A-Z, a-z, 0-9, and a special character.");
          return;
        }

          if (!formData.terms){
            setError("Accept the check box");
            return;
          }
          if (formData.password !== formData.confirmpassword) {
            setError("Passwords do not match");
             return;
          }

          setError("");
          alert(" Sucessfully created your account")
          navigate("/Loginmainpage");

         }
  return (
  <div className="Content-HR" >
    <div className="Left-content-HR">
       <div className="logoC">
      <h3>InterMS</h3>
      </div>
    <div className="Left-border-HR">
      <div className="Left-border2-HR">
         <div className="hero-content">
      <h1>Empower your team with top-tier talent.</h1>
     <div className="Left-create-p">
      <p>
      Streamline your recruitment process, manage internships with ease,
      and connect with the next generation of industry leaders.
    </p> 
    </div>
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
      </div>
    </div>
    <div className="stats-HR">
      <div className="stats-HR-cr">
      <h2>500+</h2>
      <p>COMPANIES</p>
     </div> 
     <div className="stats-HR-cr">
      <h2>10k+</h2>
      <p>STUDENTS</p>
      </div>
   </div>

    </div>
   {/* Right Content Start */}
    
  <div className="Right-content-HR">
  <div className="Right-content2-HR">
  <div className="Right-head-HR">
    <h2>Create your HR account</h2>
    <p>Join our ecosystem of professional employers.</p>
  </div>

  <div className="register-section-HR">
    <p className="register-title-HR">Registering as</p>

    <div className="Icon-group-HR">

      <div 
      className="Icon1-HR active-HR"
      onClick={() => navigate("/Createaccount")}
      
      >
        <img src={HRimg} alt="HRimage" />
        <span>HR</span>
      </div>

      <div
       className="Icon1-HR"
       onClick={() => navigate("/Mentor")}
       style={{ cursor: "pointer" }}
      >
       <img src={Mentor} alt="Mentorimage" />
       <span>Mentor</span>
      </div>

      <div
       className="Icon1-HR"
       onClick={() => navigate("/Intern")}
       style={{ cursor: "pointer" }}
       >
       <img src={Intern} alt="Internimage" />
       <span>Intern</span>
       </div>


        <div
          className="Icon1-HR"
          onClick={() => navigate("/Company")}
          style={{ cursor: "pointer" }}
        >
       <img src={Company} alt="Companyimage" />
       <span>Company</span>
       </div>

     </div>

    </div>

     <div className="form-area-borderHR">
      <form className="form-area-HR" onSubmit={handlesubmit}>

    <div className="form-group-HR">
      <label>Full Name <span style={{color:"red"}}>*</span></label>
      <input 
      type="text" 
      name = "username"
      value={formData.username}
      onChange={handlechange}
      placeholder="John Doe" />
    </div>

    <div className="form-group-HR">
      <label>Work Email Address <span style={{color:"red"}}>*</span> </label>
      <input 
      type="email" 
      name = "email"
      value={formData.email}
      onChange={handlechange}
      placeholder="john.doe@company.com" />
    </div>

    <div className="form-group-HR">
      <label>Phone Number <span style={{color:"red"}}>*</span></label>

      <div className="phone-box-HR">
      <div className="country-code-box">+91</div>

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

    <div className="form-group-HR">
      <label>Department <span style={{color:"red"}}>*</span></label>

     <select
       name="department"
       value={formData.department}
       onChange={handlechange}
      >
      <option value="">Select department</option>
      <option value="HR">HR</option>
      <option value="IT">IT</option>
      <option value="Finance">Finance</option>
      <option value="Marketing">Marketing</option>
      <option value="Operations">Operations</option>
      </select>
      </div>
      
      <div className="form-group-HR company-group-HR">
      <label>
       Company Name <span style={{ color: "red" }}>*</span>
      </label>

      <div className="company-box-HR">
      <img src={Internhub} alt="Company Icon" className="company-icon-HR" />

      <input
       type="text"
       name="company"
       value={formData.company}
       onChange={handlechange}
       placeholder="InternHub Inc."
      />
      </div>
      </div>

    <div className="form-group-HR">
      <label>Password <span style={{color:"red"}}>*</span></label>

      <div className="password-box-HR">
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
         className="eye-icon-HR"
         onClick={() => setShowPassword(!showPassword)}
         style={{width:"14.67px",height:"10px"}}
         />
      </div>
    </div>

    <div className="form-group-HR">
      <label>Confirm Password <span style={{color:"red"}}>*</span></label>

      <div className="password-box-HR">
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
         className="eye-icon-HR"
         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
         style={{width:"14.67px",height:"10px"}}
         />
      </div>
    </div>
    <div className="agree-HR">
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
     {Error && (
     <h3 className="error-message">
      <span>*</span> {Error}
      </h3>
      )}

    <div className="button-row-HR">
      <button type="submit" className="create-btn">
        Create Account
      </button>
     </div>
  </form>
  <div className="divider-HR">
    <hr />
    <span></span>
    OR
    <span></span> 
    <hr />
  </div>

  <p className="signin-HR">
    Already have an account?
    <span onClick={() => navigate("/HRandCompanyport")}> Sign In</span>
    </p>
     </div>

   </div>
    </div>
   </div>
  );
}
 