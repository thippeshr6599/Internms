import React from "react";
import "../Signup.css/Mentor.css";
import Mentorright from "../assets/Mentor Right.png"
import Mentorteams from "../assets/MentorTeams.png"
import Mentorstar from "../assets/Metrostar.png"
import Mentoroffice from "../assets/Mentoroffice.png"
import HRimg from "../assets/HR.png"
import Mentor1 from "../assets/Mentor.png"
import Intern from "../assets/Intern.png"
import Company from "../assets/Company.png"
import EyeIcon from "../assets/Eyeicon.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



export default function Mentor() {
     const navigate = useNavigate();
     const [showPassword, setShowPassword] = useState(false);
     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
     const [formData, setformData] = useState ({
       username :"",
       email :"",
       number:"",
       proffesional:"",
       skills:"",
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
          if ( !formData.username || !formData.email || !formData.number ||!formData.password || !formData.confirmpassword ){
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
          if (!formData.proffesional){
            setError("Enter your Proffesional Title ");
            return;
          }
          if (!formData.skills){
            setError("Enter your Skills/Expertise ");
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
    <div className="Content">

      {/* LEFT PANEL */}
      <div className="left-panel">

        <div className="left-top">

          <h2 className="logo">InternMS</h2>

          <div className="hero-text">
            <h1>
              Empower the next
              <br />
              generation of talent.
            </h1>

            <p>
              Join a community of experts dedicated to guiding
              students through their career journey. Share your
              wisdom, foster growth, and shape the industry's future.
            </p>
          </div>

          <div className="feature-list">

            <div className="feature-item">
              <div className="feature-icon">
                <img src={Mentorright} alt="" />
              </div>

              <div>
                <h4>Industry Impact</h4>
                <p>
                  Bridge the gap between academic learning and
                  real-world excellence.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img src={Mentorteams} alt="" />
              </div>

              <div>
                <h4>Meaningful Connections</h4>
                <p>
                  Build lasting professional relationships with
                  ambitious young minds.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img src={Mentorstar} alt="" />
              </div>

              <div>
                <h4>Personal Growth</h4>
                <p>
                  Enhance your leadership and communication skills
                  through mentorship.
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="office-image">
          <img src={Mentoroffice} alt="Office" />
        </div>
      </div>
     <div className="Right-content">
    
      <div className="Right-head">
        <h2>Mentor Registration</h2>
        <p>Complete your profile to start connecting with students.</p>
      </div>
    
      <div className="register-section">
        <p className="register-title">Registering as <span style={{color:"red"}}>*</span></p>
    
        <div className="Icon-group">
    
          <div 
          className="Icon1"
          onClick={() => navigate("/Createaccount")}
          style={{cursor:"pointer"}}
          >
            <img src={HRimg} alt="" />
            <span>HR</span>
          </div>
    
          <div
           className="Icon1 active"
           onClick={() => navigate("/Mentor")}
           style={{ cursor: "pointer" }}
          >
           <img src={Mentor1} alt="" />
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
          placeholder="Enter full name" />
        </div>
    
        <div className="form-group">
          <label>Work Email Address <span style={{color:"red"}}>*</span> </label>
          <input 
          type="email" 
          name = "email"
          value={formData.email}
          onChange={handlechange}
          placeholder="Enter your email address" />
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
          <label >Professional Title <span style={{color:"red"}}>*</span></label>
          <input
           type="text"
            name="proffesional"
            value={formData.proffesional}
            onChange={handlechange}
            placeholder="e.g. Senior Software Engineer" />
         </div>

          <div className="form-group">
          <label >Skills/Expertise <span style={{color:"red"}}>*</span></label>
          <input
           type="text"
            name="skills"
            value={formData.skills}
            onChange={handlechange}
            placeholder="e.g. UI/UX, React, Mentoring" />
         </div>

          <div className="form-group">
          <label >Years of Experience <span style={{color:"red"}}>*</span></label>
           <select>
            <option>Slect experience level</option>
           </select>
         </div>

          <div className="form-group bio-group">
            <label>
               Bio / About You <span style={{ color: "red" }}>*</span>
            </label>
            <textarea 
             type ="text"
             placeholder="Tell us about yourself, your background and why you're passionate about mentoring..."
            ></textarea>
            </div>

        <div className="form-group password-group">
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
    
        <div className="form-group password-group">
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
        <br /><br /><br />
       <div className="footer-linem"></div>
       <hr />
       <div className="footerm">
       <p>@ 2024 InternHub. All rights reserved.</p>

       <div className="footer-linksm">
        <span>Support</span>
        <span>Contact Us</span>
        </div>
        </div>
       </div>
      

    </div>
  );
}