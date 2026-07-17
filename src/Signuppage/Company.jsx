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
         industry:"",
         companysize:"",
         registration:"",
         password:"",
         confirmpassword:"",
         terms :""
       })
       const [Error, setError] = useState("");
      const handlechange = (e) => {
      const { name, value, type, checked } = e.target;

         setformData({
             ...formData,
             [name]: type === "checkbox" ? checked : value,
             });

         setError("");
        };
       const handlesubmit = (e) => {
            e.preventDefault();
            if ( !formData.username ||!formData.website || !formData.email || !formData.number || !formData.industry || !formData.companysize || !formData.registration  ){
               setError("All fields are required");
               return;
            }

            if (!formData.password || !formData.confirmpassword){
              setError("Enter your password");
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
              setError("Password do not match");
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

        <div className="Left-content-Company">

          <h1>
            Partner with InternMS
            <br />
            to scale your team.
          </h1>

          <p>
            Connect with over 100,000+ top-tier students and
            graduates ready to bring innovation to your company.
          </p>
     

      <div className="Features-Company">

       <div className="Features-Company-inside">
       <div className="Feature-item-Company">
       <div className="Icon-back-Company">
        <img src={Addicon} alt="" />
         </div>

        <div className="Icon-text-Company">
          <h3>Effortless Hiring</h3>
          <p>Post jobs and manage applicants in one centralized dashboard.</p>
        </div>
        </div>
       </div>

       <div className="Features-Company-inside">
       <div className="Feature-item-Company">
        <div className="Icon-back-Company">
        <img src={Companyright} alt="" style={{width:"16px"}} />
        </div>

       <div className="Icon-text-Company">
        <h3>Verified Talent</h3>
        <p>Every student profile is verified for education and skill credentials.</p>
        </div>
       </div>
       </div>

      </div>
           


      <div className="company-card-Company">
            <img src={Handicon} alt="Handshake" />
          </div>

        </div>

      </div>


      <div className="Right-panel-Company">

             <div className="Right-head-Company">
               <h2>Create Company Account</h2>
               <p>Fill in the details to register your organization and start hiring.</p>
             </div>
           
             <div className="register-section-Company">
           
               <div className="Icon-group-Company">
           
                 <div 
                 className="Icon1-Company "
                 onClick={() => navigate("/Createaccount")}
                 
                 >
                   <img src={HRimg} alt="" />
                   <span>HR</span>
                 </div>
           
                 <div
                  className="Icon1-Company"
                  onClick={() => navigate("/Mentor")}
                  style={{ cursor: "pointer" }}
                 >
                  <img src={Mentor} alt="" />
                  <span>Mentor</span>
                 </div>
           
                 <div
                  className="Icon1-Company"
                  onClick={() => navigate("/Intern")}
                  style={{ cursor: "pointer" }}
                  >
                  <img src={Intern} alt="" />
                  <span>Intern</span>
                  </div>
           
           
                   <div
                     className="Icon1-Company active-Company"
                     onClick={() => navigate("/Company")}
                     style={{ cursor: "pointer" }}
                   >
                  <img src={Company2} alt="" />
                  <span>Company</span>
                  </div>
           
                </div>
           
               </div>
           
             <div className="form-area-BoxCompany">
              <form className="form-area-Company" onSubmit={handlesubmit}>
           
               <div className="form-group-Company">
                 <label>Company Name <span style={{color:"red"}}>*</span></label>
                 <input 
                 type="text" 
                 name = "username"
                 value={formData.username}
                 onChange={handlechange}
                 placeholder="e.g.Acme corp" />
               </div>
           
               <div className="form-group-Company">
                 <label>Company Website <span style={{color:"red"}}>*</span> </label>
                 <input 
                 type="website" 
                 name = "website"
                 value={formData.website}
                 onChange={handlechange}
                 placeholder="https://" />
               </div>
              
              <div className="form-group-Company">
                 <label>Work Email  <span style={{color:"red"}}>*</span> </label>
                 <input 
                 type="email" 
                 name = "email"
                 value={formData.email}
                 onChange={handlechange}
                 placeholder="name@company.com" />
               </div>
          <div className="form-group-Company">
          <label>Phone Number <span style={{color:"red"}}>*</span></label>
            <div className="phone-box-Company">
            <div className="country-code-box-Company">+91</div>
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
               <div className="form-group-Company">
                 <label>Industry  <span style={{color:"red"}}>*</span></label>
           
                 <select 
                 type="select"
                 name="industry"
                 value={formData.industry}
                 onChange={handlechange}
                 >
                   <option>Select Industry</option>
                   <option>1 Industry</option>
                   <option>2 Industry</option>
                 </select>
               </div>

               <div className="form-group-Company">
                 <label>Company Size   <span style={{color:"red"}}>*</span></label>
           
                 <select 
                 type="select"
                 name="companysize"
                 value={formData.companysize}
                 onChange={handlechange}
                 >
                   <option>Select size</option>
                   <option>Tier 1</option>
                   <option>Tier 2</option>
                 </select>
               </div>
                 
                <div className="form-group-Company Registration-group-Company">
                 <label>
                  Registration Number <span style={{ color: "red" }}>*</span>
                 </label>
           
                 <div className="Registration-Company">           
                 <input
                  type="text"
                  name="registration"
                  value={formData.registration}
                  onChange={handlechange}
                  placeholder="Business ID or Tax ID"
                 />
                 </div>
                 </div>

      <div className="form-group-Company">
        <label>Password <span style={{color:"red"}}>*</span></label>
                        
        <div className="password-box-Company">
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
            className="eye-icon-Company"
            onClick={() => setShowPassword(!showPassword)}
            style={{width:"14.67px",height:"10px"}}
            />
           </div>
        </div>
                        
        <div className="form-group-Company">
           <label>Confirm Password <span style={{color:"red"}}>*</span></label>
                        
          <div className="password-box-Company">
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
             className="eye-icon-Company"
             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            style={{width:"14.67px",height:"10px"}}
               />
            </div>
        </div>
          <div className="agree-Company">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handlechange}
              className="checkbox-Company"
            />
                   
        <p>
            I agree to the <span>Terms of Service</span> and
         <span> Privacy Policy</span>
        </p>
         </div>
        {Error && <h3 style={{color:"red", fontSize:"15px", marginLeft:"25px"}}> <span style={{color:"red"}}>*</span> {Error}</h3>}
       <div className="button-row-Company">
           <button type="submit" className="create-btn-Company">
             Create Account
          </button>
          </div>
  </form>
             <div className="divider-Company">
               <hr />
               <span></span>
               OR
               <span></span> 
               <hr />
             </div>
           
             <p className="signin-Company">
               Already have an account?
               <span onClick={() => navigate("/Loginmainpage")}> Log In</span>
               </p>
             </div>
      </div>
    </div>
  <div className="top-footer-Company">
  <div className="top-footer-logo-Company">InternMS</div>

  <div className="top-footer-links-Company">
    <span>Find Talent</span>
    <span>Internships</span>
    <span>Pricing</span>
  </div>

  <div
    className="top-footer-login-Company"
    onClick={() => navigate("/Loginmainpage")}
  >
    Log In
  </div>
</div>

{/* Main Footer */}
<footer className="footer-Company">
  <div className="footer-container-Company">

    <div className="footer-col-Company first">
      <h3>InternMS</h3>
      <p>
        Connecting the next generation of talent with world-class
        opportunities. Build your future with InternHub.
      </p>
    </div>

    <div className="footer-col-Company">
      <h4>Company</h4>
      <p>About Us</p>
      <p>Careers</p>
      <p>Blog</p>
    </div>

    <div className="footer-col-Company">
      <h4>For Employers</h4>
      <p>Post a Job</p>
      <p>Hiring Solutions</p>
      <p>Pricing</p>
    </div>

    <div className="footer-col-Company">
      <h4>Support</h4>
      <p>Help Center</p>
      <p>Contact Us</p>
      <p>Privacy</p>
    </div>

  </div>

  <hr />

  <div className="footer-bottom-Company">
    <p>@ 2024 InternHub. All rights reserved.</p>

    <div className="footer-icons-Company">
      <img src={Faceicon} alt="facebook" style={{width:"48px",height:"24px",marginLeft:"20px"}}/>
      <img src={Aticon} alt="mail" />
      <img src={Share} alt="share" />
    </div>
  </div>
</footer>
</div>
  );
}