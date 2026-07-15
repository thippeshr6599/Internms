import React from "react";
import "../Signup.css/Intern.css";
import Internright from "../assets/Internright.png"
import Internsmart from "../assets/Internsmart.png"
import Internvector from "../assets/Internvector.png"
import HRimg from "../assets/HR.png"
import Mentor from "../assets/Mentor.png"
import Intern2 from "../assets/Intern.png"
import Company from "../assets/Company.png"
import EyeIcon from "../assets/Eyeicon.png";
import UploadIcon from "../assets/Uploadicon.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Intern() {
  const navigate = useNavigate();
     const [showPassword, setShowPassword] = useState(false);
     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
     const [resume, setResume] = useState("");
      const [formData, setformData] = useState ({
       username :"",
       email :"",
       number:"",
       DOB:"",
       college:"",
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
          if ( !formData.username || !formData.email || !formData.number || !formData.password || !formData.confirmpassword ){
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
          if (!formData.DOB){
            setError("Enter your Date of Birth");
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
         const handleResumeChange = (e) => {
               if (e.target.files.length > 0) {
                   setResume(e.target.files[0].name);
                }
        };
  return (
    <div className="Content-intern">

      {/* LEFT PANEL */}

      <div className="Left-panel-intern">

        <h2 className="intern-logo">InternMS</h2>

        <div className="intern-content">

          <h1>
            Your gateway to
            <br />
            professional
            <br />
            excellence starts here.
          </h1>

          <p>
            Join thousands of ambitious students securing world-class
            internships at leading tech companies and creative agencies.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="feature-section">

          <div className="feature-card">

            <img src={Internright} alt="" />

            <div>
              <h4>Verified Employers</h4>

              <p>
                Connect with pre-vetted top-tier companies worldwide.
              </p>
            </div>

          </div>

          <div className="feature-card">

            <img src={Internsmart} alt="" />

            <div>
              <h4>Smart Tracking</h4>

              <p>
                Manage all your applications in one organized dashboard.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="testimonial">

          <hr />

          <p className="quote">
            "InternMS helped me land my dream internship at a Fortune 500
            company within 3 weeks of joining."
          </p>

          <div className="user-info">

            <img src={Internvector} alt=""/>

            <span> --Sarah J., Product Design Intern</span>

          </div>

        </div>

      </div>


      <div className="Right-content-Intern">
      
        <div className="Right-head">
          <h2>Intern Registration</h2>
          <p>Fill in the details below to craete your professional account</p>
        </div>
      
        <div className="register-section">
          <p className="register-title">Registering as</p>
      
          <div className="Icon-group">
      
            <div 
            className="Icon1"
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
             className="Icon1 active"
             onClick={() => navigate("/Intern")}
             style={{ cursor: "pointer" }}
             >
             <img src={Intern2} alt="" />
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
            placeholder="Enter your full name" />
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
            <label>Date of Birth<span style={{color:"red"}}>*</span></label>
              <input
                type="number"
                name="number"
                value={formData.DOB}
                onChange={handlechange}
                placeholder="mm/dd/yyyy"
              />
          </div>
          
          <div className="form-group">
            <label>College/ University<span style={{color:"red"}}>*</span></label>
            <input 
            type="text" 
            placeholder="Enter your University name" />
          </div>
          
          <div className="form-group">
            <label> Field of Study <span style={{color:"red"}}>*</span></label>
            <select>
              <option > Select Your field of study</option>
            </select>
          </div>

           <div className="form-group">
            <label> Graduation Year <span style={{color:"red"}}>*</span></label>
            <select>
              <option > Select your graduation year</option>
            </select>
          </div>

          <div className="form-group">
           <label>Resume (Optional)</label>

            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
              hidden
             />

            <label htmlFor="resume" className="resume-upload">
             <img src={UploadIcon} alt="Upload" />
            <span>
            {resume || "Upload PDF, DOCX (Max 5MB)"}
            </span>
            </label>
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