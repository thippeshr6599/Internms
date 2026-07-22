import React from 'react'
import "../Admindashboard.css/NavbarADB.css"
import ADBmore from "../assets/ADBmore.png"
import ADBsearch from "../assets/ADBsearch.png"
import ADBnotification from "../assets/ADBnotification.png"
import ADBaccount from "../assets/ADBaccount.png"
import ADBdownarrow from "../assets/ADBdownaeeow.png"

export default function NavbarADB() {
  return (
    <div className='Content-nav-ADB'>
       <div className="navbar-left-ADB">
        <div className="menu-icon-ADB">
          <img src={ADBmore} alt="abdmore" style={{width:"24.06px", height:"24.06px",color:"#003073",cursor:"pointer"}} />
        </div>

        <div className="dashboard-text-ADB">
          <h3>Dashboard</h3>
          <p>Welcome back, Admin Here's an overview of the internship ecosystem.</p>
        </div>
      </div>

      <div className="navbar-right-ADB">
        <div className="search-box-ADB">
          <span className="search-icon-ADB"><img src={ADBsearch} alt="abdsearch" style={{width:"25.06px",height:"25.06"}} /></span>
          <input type="text" placeholder="Search anything....." />
        </div>

        <div className="notification-icon-ADB">
          <img src={ADBnotification} alt="abdnotification" style={{width:"16px",height:"20px"}}/>
          <span className="notification-dot-ADB"></span>
        </div>

        <div className="profile-section-ADB">
          <div className="profile-icon-ADB"><img src={ADBaccount} alt="account" style={{width:"22.5px",height:"24px"}} /></div>

          <div className="profile-text-ADB">
            <h4>HR</h4>
            <p>HR Dashboard</p>
          </div>

          <div className="dropdown-icon-ADB"><img src={ADBdownarrow} alt="ADBarrow" /></div>
        </div>
      </div>
    </div>
  )
}
