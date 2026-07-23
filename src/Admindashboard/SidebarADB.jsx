import React from 'react'
import "../Admindashboard.css/SidebarADB.css"
import Homeadmindash from "../assets/HomeAdmindash.png"
import OrganizationADB from "../assets/Admindashboardorg.png"
import Admininternship from "../assets/Admininternship.png"
import Adminstudent from "../assets/Adminstudent.png"
import Adminmentor from "../assets/Adminmentor.png"
import Application from "../assets/Applications.png"
import Progressreport from "../assets/Progressreports.png"
import Evaluations from "../assets/Evaluations.png"
import Certificates from "../assets/Certificates.png"
import Airecommend from "../assets/AI-Recommend.png"
import Performance from "../assets/Performence.png"
import Settings from "../assets/Settings.png"
import Support from "../assets/Support.png"

export default function SidebarADB() {
  return (
    <div className='Content-Sidebar'>
      <div className='head1-Sidebar'>
         <h2>InternMS</h2>
         <p>
          Intenship Management system
         </p>
      </div>
      <div className='head2-Sidebar'>
        <img src={Homeadmindash} alt="Homeadmin" />
        <h4>Dashboard</h4>
      </div>
       <div className='Manage-Sidebar'>
         <h2>MANAGEMENT</h2>
         <div className='Manage-opt-Sidebar'>
            <div className='Manage-list-Sidebar'>
              <div className='Image-border-Sidebar'>
                <img src={OrganizationADB} alt="Organization" />
              </div>
              <h3>Organizations</h3>
            </div>
            <div className='Manage-list-Sidebar'>
                <img src={Admininternship} alt="internship" style={{widows:"11px", height:"15px"}} />
              <h3>Internships</h3>
            </div>
            <div className='Manage-list-Sidebar'>
                <img src={Adminstudent} alt="Adminstudent" style={{widows:"16.5px", height:"11px"}} />
              <h3>Students</h3>
            </div>
            <div className='Manage-list-Sidebar'>
                <img src={Adminmentor} alt="Adminmentor" style={{widows:"16.5px", height:"11px"}}  />
              <h3>Mentors</h3>
            </div>
         </div>
      </div>
        <div className='Manage-Sidebar'>
         <h2>MONITORINGs</h2>
         <div className='Manage-opt-Sidebar'>
            <div className='Manage-list-Sidebar'>
                <img src={Application} alt="application" style={{width:"16px", height:"20px"}} />
              <h3>Applications</h3>
            </div>
            <div className='Manage-list-Sidebar'>
                <img src={Progressreport} alt="progress" style={{widows:"17.52px", height:"21.6px"}} />
              <h3>Progress Reports</h3>
            </div>
            <div className='Manage-list-Sidebar'>
                <img src={Evaluations} alt="evaluation" style={{widows:"17.52px", height:"21.6px"}} />
              <h3>Evaluations</h3>
            </div>
         </div>
      </div>
        <div className='Manage-Sidebar'>
         <h2>CERTIFICATES</h2>
         <div className='Manage-opt-Sidebar'>
            <div className='Manage-list-Sidebar'>
                <img src={Certificates} alt="certificates" style={{width:"16px",height:"20px"}} />
              <h3>Certificates</h3>
            </div>
         </div>
      </div>
        <div className='Manage-Sidebar'>
         <h2>AI INSIGHTS</h2>
         <div className='Manage-opt-Sidebar'>
            <div className='Manage-list-Sidebar'>
                <img src={Airecommend} alt="ai-recommend" style={{widows:"19.91px", height:"19.91px"}} />
              <h3>Ai Recommendations</h3>
            </div>
            <div className='Manage-list-Sidebar'>
                <img src={Performance} alt="performance" style={{widows:"21.33px", height:"21.81px"}} />
              <h3>Performance Prediction</h3>
            </div>
         </div>
      </div>
       <div className='Manage-Sidebar'>
         <h2>SYSTEM</h2>
         <div className='Manage-opt-Sidebar'>
            <div className='Manage-list-Sidebar'>
                <img src={Evaluations} alt="report" style={{width:"17.82",height:"21.6px"}}/>
              <h3>Report & Analytics</h3>
            </div>
            <div className='Manage-list-Sidebar'>
                <img src={Settings} alt="settings" style={{widows:"20.1px", height:"20px"}} />
              <h3>Settings</h3>
            </div>
             <div className='Manage-list-Sidebar'>
                <img src={Support} alt="settings" style={{widows:"16.8px", height:"21.6px",marginTop:""}} />
              <h3>Support</h3>
            </div>
         </div>
      </div>
    </div>
  )
}
