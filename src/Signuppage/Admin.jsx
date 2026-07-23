import React from 'react'
import "../Signup.css/Admin.css"
import Adminleft from "../assets/Adminleftimage.png"
import Adminright from "../assets/Adminright.png"
import Admintrust from "../assets/Admintrust.png"
import EyeIcon from "../assets/Eyeicon.png";
import Adminimage from "../assets/Adminimage.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Admin() {
  const navigate = useNavigate();
     const [showPassword, setShowPassword] = useState(false);
     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
     const [formData, setformData] = useState ({
       username :"",
       email :"",
       number:"",
       organization:"",
       designation:"",
       country:"",
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
          if ( !formData.username || !formData.email || !formData.number|| !formData.organization || !formData.designation || !formData.country){
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
            setError("Password do not match");
             return;
          }
          setError("");
          alert(" Sucessfully created your account")
           
          navigate("/Loginmainpage");
         }
  return (
    <div className='Content-Admin'>
      <div className='Admin-main'>
         <div className='Left-panel-Admin'>
         <div className="left-panel-Admin">
          <h2 className="logo-Admin">InternMS</h2>

          <div className="left-content-Admin">
            <h1>Regain access to your professional future.</h1>
            <p>
              Join thousands of companies and educational institutions
              managing the next generation of global talent through our
              secure, integrated ecosystem.
            </p>

            <div className="image-card-Admin">
              <img
                src={Adminleft}
                alt="Dashboard"
              />
            </div>

             <div className="feature-Admin">
              <div className="feature-box-Admin">

               <div className="feature-item-Admin">
               <div className="feature-icon-Admin">
               <img src={Adminright} alt="Trusted and Secure" style={{width:"9.33px",height:"11.67px"}} />
               </div>
               <div>
                <h4>Trusted and Secure</h4>
                 <p>Secured and personalized experience for every user.</p>
                 </div>
                </div>

              <div className="feature-item-Admin">
                <div className="feature-icon-Admin">
                 <img src={Admintrust} alt="Role-based access" style={{width:"9.33px",height:"11.67px"}} />
               </div>
              <div>
                <h4>Role-based access</h4>
                <p>Your data is protected with industry standard security.</p>
             </div>
             </div>
              </div>
             </div>
          </div>
        </div>

       </div>
       <div className="Right-content-Admin">
           
             <div className="Right-content-Adminbox">
                 <div className="Right-head-Admin">
               <h2>Mentor Registration</h2>
               <p>Complete your profile to start connecting with students.</p>
             </div>
           
             <div className="register-section-Admin">
               <p className="register-title-Admin">Registering as <span style={{color:"red"}}>*</span></p>
           
               <div className="Icon-group-Admin">
           
                 <div 
                 className="Icon1-Admin"
                 onClick={() => navigate("/Admin")}
                 style={{cursor:"pointer"}}
                 >
                   <img src={Adminimage} alt="" />
                   <span>Admin</span>
                 </div>
           
                </div>
           
               </div>
           
               <div className="form-border-Admin">
               <form className="form-area-Admin" onSubmit={handlesubmit}>
           
               <div className="form-group-Admin">
                 <label>Full Name <span style={{color:"red"}}>*</span></label>
                 <input 
                 type="text" 
                 name = "username"
                 value={formData.username}
                 onChange={handlechange}
                 placeholder="Enter full name" />
               </div>
           
               <div className="form-group-Admin">
                 <label>Email Address <span style={{color:"red"}}>*</span> </label>
                 <input 
                 type="email" 
                 name = "email"
                 value={formData.email}
                 onChange={handlechange}
                 placeholder="Enter your email address" />
               </div>
           
               <div className="form-group-Admin">
                 <label>Phone Number <span style={{color:"red"}}>*</span></label>
           
                 <div className="phone-box-Admin">
                   <div className="country-code-box-Admin">+91</div>
           
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
           
               <div className="form-group-Admin">
                 <label >Organization / Institution Name <span style={{color:"red"}}>*</span></label>
                 <input
                  type="text"
                   name="organization"
                   value={formData.organization}
                   onChange={handlechange}
                   placeholder="Enter organization Name" />
                </div>
       
                 <div className="form-group-Admin">
                 <label >Job Title / Designation <span style={{color:"red"}}>*</span></label>
                 <input
                  type="text"
                   name="designation"
                   value={formData.designation}
                   onChange={handlechange}
                   placeholder="Enter your Job Title" />
                </div>
       
                 <div className="form-group-Admin">
                 <label > Country <span style={{color:"red"}}>*</span></label>
                  <select 
                  type="country"
                  name='country'
                  value={formData.country}
                  onChange={handlechange}
                  >
                   <option>Slect your country</option>
                   <option value="two">India</option>
                   <option value="three">Japan</option>
                   <option value="four">Germany</option>
                   <option value="more">America</option>
                  </select>
                </div>
                 <div className="form-group-Admin">
                      <label>Password <span style={{color:"red"}}>*</span></label>
                
                      <div className="password-box-Admin">
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
                         className="eye-icon-Admin"
                         onClick={() => setShowPassword(!showPassword)}
                         style={{width:"14.67px",height:"10px"}}
                         />
                      </div>
                    </div>
                
                    <div className="form-group-Admin">
                      <label>Confirm Password <span style={{color:"red"}}>*</span></label>
                
                      <div className="password-box-Admin">
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
                         className="eye-icon-Admin"
                         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                         style={{width:"14.67px",height:"10px"}}
                         />
                      </div>
                    </div>
               <div className="agree-Admin">
                <input
                 type="checkbox"
                 name="terms"
                 checked={formData.terms}
                 onChange={handlechange}
                 className="checkbox-Admin"
                />
           
                <p>
                  I agree to the <span>Terms of Service</span> and
                 <span> Privacy Policy</span>
                </p>
                </div>
               {Error && <h3 style={{color:"red", fontSize:"15px", marginLeft:"25px"}}> <span style={{color:"red"}}>*</span> {Error}</h3>}
               <div className="button-row-Admin">
                 <button type="submit" className="create-btn-Admin">
                   Create Account
                 </button>
                </div>
             </form>
             <div className="divider-Admin">
               <hr />
               <span></span>
               OR
               <span></span> 
               <hr />
             </div>
           
             <p className="signin-Admin">
               Already have an account?
               <span onClick={() => navigate("/Loginmainpage")}> Sign In</span>
               </p>
               </div>
             </div>
              </div>
      </div>
              <div className="footerm-Admin">
             <p>@ 2024 InternMS. All rights reserved.</p>

            <div className="footer-linksm-Admin">
             <span>Privacy Policy</span>
             <span>Terms of Service</span>
             <span>Support</span>
             </div>
         </div>
    </div>
  )
}
