import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Login.css/Loginmainpage.css"
import EyeIcon from "../assets/Eyeicon.png";
import GoogleIcon from "../assets/SVG.png";
import Gmail1 from "../assets/Gmail1.png";
import Lock1 from "../assets/Pass1.png";
import Rightarrow from "../assets/Righticon (2).png"


function App() {
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);
   const [formData, setformData] = useState({
        email:"",
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
      if (!formData.email || !formData.password) {
    setError("Enter your email and password");
    return;
  }

  if (!formData.email.includes("@")) {
    setError("Email must contain @");
    return;
  }

  if (formData.password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }

   setError("");
   navigate("/Twostepverification");
};


  return (
     <div className="Content-Loginpage">
        <div className="left-panel-Loginpage">

        <div className="left-content-Loginpage">

        <div className="Left-top-Loginpage">
           <h1 className="logo-Loginpage">InternHub</h1>

           <h2>
            Your next big leap starts
            <br />
            here.
           </h2>

           <p>
             Connect with industry leaders, manage your
             applications, and accelerate your career path
             with our comprehensive internship management
             platform.
           </p>

          <div className="stat-Loginpage">
          <div>
            <h3>500+</h3>
            <span>PARTNER COMPANIES</span>
          </div>

          <div>
            <h3>10k+</h3>
            <span>SUCCESS STORIES</span>
          </div>
        </div>
      </div>

    </div>

    <div className="copyright-Login">
      @2024 InternMS
    </div>

</div>
    <div className="right-panel-Login">

       <div className="right-content-Login">
         <div className="login-box">

          <div className="head-Login">
          <h1>Welcome Back</h1>

          <p>
            Manage your career journey.
          </p>
          </div>

          <div className="Form-Login">
            <label>Email Address</label>

          <form onSubmit={handlesubmit}>
          <div className="input-box-Login">
          <img src={Gmail1} alt="" style={{width:"22px",height:"18px"}} />
          <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handlechange}
              placeholder="Enter Email address"
            />
          </div>

          <div className="label-row">
            <label>Password</label>
            <Link to="/Forgotpassword">Forgot Password?</Link>
          </div>

           <div className="input-box-Login">

            <img src={Lock1} alt="" style={{width:"20px",height:"20px"}} />
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
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
                style={{width:"25px",height:"16px"}}
              />

           </div>
        
           {Error && <h3 style={{color:"red", fontSize:"16px",marginTop:"25px"}}> {Error}</h3>}
           <br />
          <div className="remember">
            <input type="checkbox" />
            <span>Keep me signed in</span>
          </div>

           <button type="submit" className="signin-Login">
            Sign In <img src={Rightarrow} alt="" style={{width:"18",height:"12px"}}/>
           </button>
          </form>
          </div>

          <div className="divider-Login">
            <span>OR CONTINUE WITH</span>
          </div>

          <button className="google">
             <img src={GoogleIcon} alt="Google" className="Gicon" />
             Google
           </button>

         <p className="signup-Login">
            Don't have an account?
            <Link to="/Createaccount"> Create Account</Link>
           </p>

          <div className="footer-links-Login">
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
  );
}

export default App;