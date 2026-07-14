import React from "react";
import "../Signup.css/Company.css";
import Addicon from "../assets/Addcontact.png";
import Companyright from "../assets/Companyright.png"
import Handicon from "../assets/Hand.png"
import HRimg from "../assets/HR.png"
import Mentor from "../assets/Mentor.png"
import Intern from "../assets/Intern.png"
import Company2 from "../assets/Company.png"
import EyeIcon from "../assets/Eyeicon.png";
import Faceicon from "../assets/Faceicon.png"
import Aticon from "../assets/Aticon.png"
import Share from "../assets/Shareicon.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";



export default function Company() {
  const navigate = useNavigate();
       const [showPassword, setShowPassword] = useState(false);
       const [showConfirmPassword, setShowConfirmPassword] = useState(false);
       const [formData, setformData] = useState ({
         username :"",
         website:"",
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
           }
  return (
<div className="company-page">
       <div className="Content-Company">

      {/* LEFT PANEL */}
      <div className="Left-panel-Company">

        <div className="company-left-content">

          <h1>
            Partner with InternMS
            <br />
            to scale your team.
          </h1>

          <p className="company-description">
            Connect with over 100,000+ top-tier students and
            graduates ready to bring innovation to your company.
          </p>
      <div className="Features">
          <div className="Icon-back">
            <img src={Addicon} alt="" />
          </div>
          <div className="Icon-text">
            <h3> Effortless Hiring</h3>
            <p>Post jobs and manage applicants in one centralized dashboard.</p>
          </div>
      </div>
      <br />
      <div className="Features">
          <div className="Icon-back">
            <img src={Companyright} alt="" />
          </div>
          <div className="Icon-text">
            <h3> Verified Talent</h3>
            <p>Every student profile is verified for education and skill creditntials.</p>
          </div>
      </div>
           

          {/* Bottom Card */}
          <div className="company-card">
            <img src={Handicon} alt="Handshake" />
          </div>

        </div>

      </div>

      {/* RIGHT PANEL */}
      <div className="Right-panel-Company">

             <div className="Right-head">
               <h2>Create Company Account</h2>
               <p>Fill in the details to register your organization and start hiring.</p>
             </div>
           
             <div className="register-section">
               <p className="register-title">Registering as</p>
           
               <div className="Icon-group">
           
                 <div 
                 className="Icon1 "
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
                     className="Icon1 active"
                     onClick={() => navigate("/Company")}
                     style={{ cursor: "pointer" }}
                   >
                  <img src={Company2} alt="" />
                  <span>Company</span>
                  </div>
           
                </div>
           
               </div>
           
             <form className="form-area" onSubmit={handlesubmit}>
           
               <div className="form-group">
                 <label>Company Name <span style={{color:"red"}}>*</span></label>
                 <input 
                 type="text" 
                 name = "username"
                 value={formData.username}
                 onChange={handlechange}
                 placeholder="e.g.Acme corp" />
               </div>
           
               <div className="form-group">
                 <label>Company Website <span style={{color:"red"}}>*</span> </label>
                 <input 
                 type="website" 
                 name = "website"
                 value={formData.website}
                 onChange={handlechange}
                 placeholder="https://" />
               </div>
              
              <div className="form-group">
                 <label>Work Email  <span style={{color:"red"}}>*</span> </label>
                 <input 
                 type="email" 
                 name = "email"
                 value={formData.email}
                 onChange={handlechange}
                 placeholder="name@company.com" />
               </div>

               <div className="form-group">
                 <label>Phone Number <span style={{color:"red"}}>*</span></label>
           
                 <div className="phone-box">
                   <select>
                     <option>+91</option>
                   </select>
           
                   <input
                     type="number"
                     name="number"
                     value={formData.number}
                     onChange={handlechange}
                     placeholder="Enter your number"
                   />
                 </div>
               </div>
           
               <div className="form-group">
                 <label>Industry  <span style={{color:"red"}}>*</span></label>
           
                 <select>
                   <option>Select Industry</option>
                 </select>
               </div>

               <div className="form-group">
                 <label>Company Size   <span style={{color:"red"}}>*</span></label>
           
                 <select>
                   <option>Select size</option>
                 </select>
               </div>
                 
                <div className="form-group company-group">
                 <label>
                  Registration Number <span style={{ color: "red" }}>*</span>
                 </label>
           
                 <div className="company-box">           
                 <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handlechange}
                  placeholder="Business ID or Tax ID"
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
                   Register Company
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
               <span onClick={() => navigate("/Loginmainpage")}> Log In</span>
               </p>
      </div>
    </div>
      <div className="company-nav-footer">

  <div className="company-logo">
    InternMS
  </div>

  <div className="company-nav-links">
    <span>Find Talent</span>
    <span>Internships</span>
    <span>Pricing</span>
  </div>

  <div className="company-login-link">
    Log In
  </div>

</div>


<div className="company-footer">

  <div className="footer-content">

    <div className="footer-column footer-brand">
      <h3>InternMS</h3>

      <p>
        Connecting the next generation of talent with
        world-class opportunities. Build your future with
        InternHub.
      </p>
    </div>

    <div className="footer-column">
      <h4>Company</h4>

      <p>About Us</p>
      <p>Careers</p>
      <p>Blog</p>
    </div>

    <div className="footer-column">
      <h4>For Employers</h4>

      <p>Post a Job</p>
      <p>Hiring Solutions</p>
      <p>Pricing</p>
    </div>

    <div className="footer-column">
      <h4>Support</h4>

      <p>Help Center</p>
      <p>Contact Us</p>
      <p>Privacy</p>
    </div>

  </div>

  <hr />

  <div className="footer-bottom">

    <p>@ 2024 InternHub. All rights reserved.</p>

    <div className="footer-icons">
      <span><img src={Faceicon} alt="" style={{width:"40px"}} /></span>
      <span><img src={Aticon} alt="" /></span>
      <span><img src={Share} alt="" /></span>
    </div>

  </div>

</div>
</div>
  );
}