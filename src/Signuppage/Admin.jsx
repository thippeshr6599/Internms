import React from 'react'
import "../Signup.css/Admin.css"
import Adminleft from "../assets/Adminleftimage.png"

export default function Admin() {
  return (
    <div className='Content-Admin'>
       <div className='Left-panel-Admin'>
         <div className="left-panel">
          <h2 className="logo">InternMS</h2>

          <div className="left-content">
            <h1>Regain access to your professional future.</h1>
            <p>
              Join thousands of companies and educational institutions
              managing the next generation of global talent through our
              secure, integrated ecosystem.
            </p>

            <div className="image-card">
              <img
                src={Adminleft}
                alt="Dashboard"
              />
            </div>

            <div className="feature">
              <div className="feature-icon"><img src={} alt="" /></div>
              <div className='feature-icon-Admin'>
                <h4>Role-based access</h4>
                <p>Secure and personalized experience for every user.</p>
              </div>
               <div className="feature-icon"><img src={} alt="" /></div>
              <div>
                <h4>Trusted & Secure</h4>
                <p>Your data is protected with industry-standard security.</p>
              </div>
            </div>
          </div>
        </div>

       </div>
       <div className='Right-content-Admin'>
       </div>
    </div>
  )
}
