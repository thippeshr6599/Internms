import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import EyeIcon from "../assets/Eyeicon.png";
import GoogleIcon from "../assets/SVG.png";
import "../Login.css/HRandCompanyport.css"
import HRandCompany from "../assets/HRandCompanyimageBackground.png"
import username from "../assets/username.png"
import Lock1 from "../assets/Pass1.png";
import Rightarrow from "../assets/Righticon (2).png"

export default function HRandCompanyport() {
      const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);
   const [formData, setformData] = useState({
        username:"",
        password:"",
   })
   const [Error, setError] = useState("");
   const handlechange = (e) => {
    const { name, value } = e.target;

    setformData({
        ...formData,
       [name]: value,
    });
    };

   const handlesubmit = (e) => {
          e.preventDefault();
      if (!formData.username || !formData.password) {
    setError("Enter your username and password");
    return;
  }

  

  if (formData.password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }

   setError("");
   navigate("/Admindashboard");
};
  return (
    <div className='Content-HRandCompany'>
       <div className='left-panel-HRandCompany'>
        <div className='left-Top-HRandCompany'>
           <h2 className="logo-HRandCompany">HR and Company Portal</h2>

     <div className="hero-text-HRandCompany">
      <h1>
        Empowering<br />
        Growth<br />
        through<br />
        Innovation.
      </h1>

      <p>
        Connect with leaders, manage talent, and drive your organization
        forward with our unified platform.
      </p>
    </div>

    <div className="stats-HRandCompany">
      <div>
        <h3>500+</h3>
        <p>PARTNER COMPANIES</p>
      </div>
      <div>
        <h3>10k+</h3>
        <p>SUCCESS STORIES</p>
      </div>
    </div>
        </div>
      <div className='copyright-HRandCompany'>
        <p>
          @2024 HR and Company portal.All rights reserved.
        </p>
      </div>
       </div>
       <div className='Right-Content-HRandCompany'>       
          <div className="right-content-HRandCompany">
              <div className="login-box-HRandCompany">
          
                <div className="head-HRandCompany">
                  <h1>Welcome Back</h1>
          
                  <p>
                    Manage your career journey.
                  </p>
                </div>
          
                <div className="Form-HRandCompany">
                  <label>username</label>
          
                    <form onSubmit={handlesubmit}>
                    <div className="input-box-HRandCompany">
                    <img src={username} alt="" style={{width:"16px",height:"16px"}} />
                    <input
                        type="username"
                        name="username"
                        value={formData.username}
                        onChange={handlechange}
                        placeholder="Enter Your Username"
                      />
                    </div>
          
                    <div className="label-row-HRandCompany">
                      <label>Password</label>
                      <Link to="/Forgotpassword">Forgot Password?</Link>
                    </div>
          
                     <div className="input-box-HRandCompany">
          
                      <img src={Lock1}  alt="" style={{width:"16px",height:"21px",color:"#777586"}} />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handlechange}
                        placeholder="Enter your password"
                      />
                        <img
                          src={EyeIcon}
                          alt="Toggle Password"
                          className="eye-icon-HRandCompany"
                          onClick={() => setShowPassword(!showPassword)}
                          style={{width:"25px",height:"16px"}}
                        />
          
                     </div>
                  
                     {Error && <h3 style={{color:"red", fontSize:"16px",marginTop:"25px"}}> {Error}</h3>}
                     <br />
                    <div className="remember-HRandCompany">
                      <input type="checkbox" />
                      <span>Keep me signed in</span>
                    </div>
          
                     <button type="submit" className="signin-HRandCompany">
                      Sign In <img src={Rightarrow} alt="" style={{width:"16",height:"16px"}}/>
                     </button>
                    </form>
                    </div>
          
                    <div className="divider-HRandCompany">
                      <hr />
                      <span>OR CONTINUE WITH</span>
                      <hr />
                    </div>
          
                    <button className="google-HRandCompany">
                       <img src={GoogleIcon} alt="Google" className="Gicon-HRandCompany" />
                       Sign in with Google
                     </button>
          
                   <p className="signup-HRandCompany">
                      Don't have an account?
                      <Link to="/Createaccount"> Create Account</Link>
                     </p>
          
                    <div className="footer-links-HRandCompany">
                      <a href="#">Help</a>
                      <span>•</span>
                      <a href="#">Privacy</a>
                      <span>•</span>
                      <a href="#">Terms</a>
                    </div>
          
                  </div>
                 </div>
          
       </div>
    </div>
  )
}
