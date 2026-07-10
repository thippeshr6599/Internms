import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Login.css/Loginmainpage.css"
import EyeIcon from "../assets/Eyeicon.png";
import GoogleIcon from "../assets/SVG.png";
import Gmail1 from "../assets/Gmail1.png";
import Lock1 from "../assets/Pass1.png";


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
      <div className="Content">
      <div className="Page-Container">
         <div className="login-page">


          <div className="left-panel">

          <div className="left-content">
   
          <h1 className="logo" style={{marginRight:"300px",marginTop:"50px",fontWeight:"700" , fontSize:"30px"}}>InternHub</h1>

          <h2 style={{marginLeft:"25px",fontSize:"30px",}}>
            Your next big leap starts
            <br />
            here.
          </h2>

          <p style={{textAlign:"start",marginLeft:"25px", fontSize:"14px"}}>
            Connect with industry leaders, manage your
            applications, and accelerate your career path
            with our comprehensive internship management
            platform.
          </p>

          <div className="stat" style={{backgroundColor:"none"}}>

            <div style={{marginLeft:"40px"}} >
              <h3>500+</h3>
              <span style={{fontSize:"10px"}}>PARTNER COMPANIES</span>
            </div>

            <div>
              <h3>10k+</h3>
              <span style={{fontSize:"10px"}}>SUCCESS STORIES</span>
            </div>

          </div>

        </div>

        <div className="copyright" style={{marginTop:"80px", marginRight:"280px",fontSize:"10px"}}>
           @2024 InternMS
        </div>
         
      </div>


      <div className="right-panel">

        <div className="login-box">

          <h1>Welcome Back</h1>

          <p className="subtitle" style={{fontSize:"16px"}}>
            Manage your career journey.
          </p>

          <label>Email Address</label>

          <form onSubmit={handlesubmit}>
            <div className="input-box">
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

           <div className="input-box">

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
        
           {Error && <h3 style={{color:"red", fontSize:"13px"}}> {Error}</h3>}
           <br />
          <div className="remember">
            <input type="checkbox" />
            <span>Keep me signed in</span>
          </div>

           <button type="submit" className="signin">
            Sign In
           </button>
          </form>

          <div className="divider">
            <span>OR CONTINUE WITH</span>
          </div>

          <button className="google">
             <img src={GoogleIcon} alt="Google" className="Gicon" />
             Google
           </button>

         <p className="signup">
            Don't have an account?
            <Link to="/Createaccount"> Create Account</Link>
           </p>

          <div className="footer-links">
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

      </div>
  );
}

export default App;