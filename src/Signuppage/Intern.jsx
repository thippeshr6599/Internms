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
       field:"",
       graduation:"",
       resume:"",
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
          if ( !formData.username || !formData.email || !formData.number|| !formData.DOB || !formData.college || !formData.field || !formData.graduation || !formData.resume  ){
             setError("All fields are required");
             return;
          }
          if (formData.number.length !== 10) {
            setError("Enter a valid 10-digit phone number");
            return;
          }
       
          if (!formData.password || !formData.confirmpassword){
            setError("Create your Password");
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
    <div className="Content-Intern">

      <div className="Left-panel-Intern">

       <div className="Logo-box-Intern">
           <h2 className="logo-Intern">InternMS</h2>

        <div className="Top-Intern">

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
       </div>

        {/* Feature Cards */}

       <div className="Left-panel-Box2Intern">
          <div className="feature-section-Intern">

          <div className="feature-card-Intern">

            <img src={Internright} alt="" />

            <div>
              <h4>Verified Employers</h4>

              <p>
                Connect with pre-vetted top-tier companies worldwide.
              </p>
            </div>

          </div>

          <div className="feature-card-Intern">

            <img src={Internsmart} alt="" />

            <div>
              <h4>Smart Tracking</h4>

              <p>
                Manage all your applications in one organized dashboard.
              </p>
            </div>

          </div>

        </div>

        <div className="testimonial-Intern">

          <hr />

          <p className="quote-Intern">
            "InternMS helped me land my dream internship at a Fortune 500
            company within 3 weeks of joining."
          </p>

          <div className="user-info-Intern">

            <img src={Internvector} alt=""/>

            <span> --Sarah J., Product Design Intern</span>

          </div>

        </div>
       </div>

      </div>

      <div className="Right-content-Intern">
       <div className="Right-insidecontent-Intern"> 
        <div className="Right-head-Intern">
          <h2>Intern Registration</h2>
          <p>Fill in the details below to craete your professional account</p>
        </div>
      
        <div className="register-section-Intern">
          <p className="register-title-Intern">Registering as</p>
      
          <div className="Icon-group-Intern">
      
            <div 
            className="Icon1-Intern"
            onClick={() => navigate("/Createaccount")}
            
            >
              <img src={HRimg} alt="" />
              <span>HR</span>
            </div>
      
            <div
             className="Icon1-Intern"
             onClick={() => navigate("/Mentor")}
             style={{ cursor: "pointer" }}
            >
             <img src={Mentor} alt="" />
             <span>Mentor</span>
            </div>
      
            <div
             className="Icon1-Intern active-Intern"
             onClick={() => navigate("/Intern")}
             style={{ cursor: "pointer" }}
             >
             <img src={Intern2} alt="" />
             <span>Intern</span>
             </div>
      
      
              <div
                className="Icon1-Intern"
                onClick={() => navigate("/Company")}
                style={{ cursor: "pointer" }}
              >
             <img src={Company} alt="" />
             <span>Company</span>
             </div>
      
           </div>
      
          </div>
      
        <div className="form-box-Intern">
           <form className="form-area-Intern" onSubmit={handlesubmit}>
      
          <div className="form-group-Intern">
            <label>Full Name <span style={{color:"red"}}>*</span></label>
            <input 
            type="text" 
            name = "username"
            value={formData.username}
            onChange={handlechange}
            placeholder="Enter your full name" />
          </div>
      
          <div className="form-group-Intern">
            <label>Work Email Address <span style={{color:"red"}}>*</span> </label>
            <input 
            type="email" 
            name = "email"
            value={formData.email}
            onChange={handlechange}
            placeholder="Enter your email address" />
          </div>
      
          <div className="form-group-Intern">
            <label>Phone Number <span style={{color:"red"}}>*</span></label>
      
            <div className="phone-box-Intern">
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
      
          <div className="form-group-Intern">
            <label>Date of Birth<span style={{color:"red"}}>*</span></label>
              <input
                type="DOB"
                name="DOB"
                value={formData.DOB}
                onChange={handlechange}
                placeholder="mm/dd/yyyy"
              />
          </div>
          
          <div className="form-group-Intern">
            <label>College/ University<span style={{color:"red"}}>*</span></label>
            <input 
            type="text" 
            name="college"
            value={formData.college}
            onChange={handlechange}
            placeholder="Enter your University name" />
          </div>
          
          <div className="form-group-Intern">
            <label> Field of Study <span style={{color:"red"}}>*</span></label>
            <select
            name="field"
            type="text"
            value={formData.field}
            onChange={handlechange}
            >
              <option > Select Your field of study</option>
            </select>
          </div>

           <div className="form-group-Intern">
            <label> Graduation Year <span style={{color:"red"}}>*</span></label>
            <select 
            name="year"
            value={formData.graduation}
            onChange={handlechange}
            >
              <option > Select your graduation year</option>
            </select>
          </div>

          <div className="form-group-Intern">
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

          <div className="form-group-Intern">
            <label>Password <span style={{color:"red"}}>*</span></label>
                   
             <div className="password-box-Intern">
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
                    className="eye-icon-Intern"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{width:"14.67px",height:"10px"}}
                    />
                 </div>
                 </div>
                   
            <div className="form-group-Intern">
              <label>Confirm Password <span style={{color:"red"}}>*</span></label>
                   
               <div className="password-box-Intern">
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
                className="eye-icon-Intern"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{width:"14.67px",height:"10px"}}
               />
             </div>
          </div>
          <div className="agree-Intern">
         <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handlechange}
          className="checkbox-Intern"
         />
    
         <p>
           I agree to the <span>Terms of Service</span> and
          <span> Privacy Policy</span>
         </p>
         </div>
                {Error && <h3 style={{color:"red", fontSize:"15px", marginTop:"10px",textAlign:"center"}}> <span style={{color:"red"}}>*</span> {Error}</h3>}
          <div className="button-row-Intern">
            <button type="submit" className="create-btn-Intern">
              Create Account
            </button>
           </div>
        </form>
        <div className="divider-Intern">
          <hr />
          <span></span>
          OR
          <span></span> 
          <hr />
        </div>
      
        <p className="signin-Intern">
          Already have an account?
          <span onClick={() => navigate("/Loginmainpage")}> Sign In</span>
          </p>
      
        </div>
         </div>
      </div>

    </div>
  );
}