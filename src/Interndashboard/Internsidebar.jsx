import React from 'react'
import "../Interndashboard/Internsidebar.css"
import HomeIDB from "../assets/HomeAdmindash.png"
import Myinternship from "../assets/Myinternship.png"
import Applicationstatus from "../assets/Applicationstatus.png"
import Assignedmentor from "../assets/Assignedmentor.png"
import Progresstracking from "../assets/Progresstracking.png"
import Weeklyreports from "../assets/Weeklyreports.png"
import TasksIDB from "../assets/IDBtasks.png"
import Notificationsidb from "../assets/Notificationidb.png"
import Certificateidb from "../assets/Certificatesidb.png"
import Performanceidb from "../assets/Peromanceidb.png"



export default function Internsidebar() {
  return (
    <div className='Content-Sidebar-IDB'>
          <div className='head1-Sidebar-IDB'>
             <h2>InternMS</h2>
             <p>
              Intenship Management system
             </p>
          </div>
          <div className='head2-Sidebar-IDB'>
            <img src={HomeIDB} alt="Homeadmin" />
            <h4>Dashboard</h4>
          </div>
          <div className='Header-sidbar-IDB'>
            <div className='header-sidebar-IDB'>
            <img src={Myinternship} alt="internshipimage" style={{width:"21px", height:"21px",marginLeft:"20px"}} />
                <span>My Internships</span>
            </div>
            <div className='header-sidebar-IDB'>
                <img src={Applicationstatus} alt="Applicationstatus" style={{width:"16.9px", height:"21.54px",marginLeft:"20px"}} />
                <span>Application Status</span>
            </div><div className='header-sidebar-IDB'>
                <img src={Assignedmentor} alt="Assignedmentor" style={{width:"18px", height:"18px",marginLeft:"20px"}} />
                <span>Assigned Mentor</span>
            </div><div className='header-sidebar-IDB'>
                <img src={Progresstracking} alt="Progresstracking" style={{width:"24px", height:"24px",marginLeft:"15px"}}/>
                <span>Progress Tracking</span>
            </div><div className='header-sidebar-IDB'>
                <img src={Weeklyreports} alt="Weeklyreports" style={{width:"17.52px", height:"21.60px",marginLeft:"20px"}}/>
                <span>Weekly Reports</span>
            </div><div className='header-sidebar-IDB'>
                <img src={TasksIDB} alt="TaskIDB" style={{width:"24px", height:"24px",marginLeft:"15px"}} />
                <span>Tasks & Deliverables</span>
            </div><div className='header-sidebar-IDB'>
                <img src={Notificationsidb} alt="Notification" style={{width:"16px", height:"20px",marginLeft:"20px"}} />
                <span>Notifications</span>
            </div><div className='header-sidebar-IDB'>
                <img src={Certificateidb} alt="Certificate" style={{width:"24px", height:"24px",marginLeft:"15px"}} />
                <span>Certificates</span>
            </div><div className='header-sidebar-IDB'>
                <img src={Performanceidb} alt="Performance" style={{width:"24px", height:"24px",marginLeft:"15px"}}/>
                <span>Performance Metrics</span>
            </div>
          </div>
        </div>
  )
}
