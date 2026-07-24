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
                <img src={Myinternship} alt="internshipimage" />
                <span>My Internships</span>
            </div>
            <div className='header-sidebar-IDB'>
                <img src={Applicationstatus} alt="internshipimage" />
                <span>Application Status</span>
            </div><div className='header-sidebar-IDB'>
                <img src={Assignedmentor} alt="internshipimage" />
                <span>Assigned Mentor</span>
            </div><div className='header-sidebar-IDB'>
                <img src={Progresstracking} alt="internshipimage" />
                <span>Progress Tracking</span>
            </div><div className='header-sidebar-IDB'>
                <img src={Weeklyreports} alt="internshipimage" />
                <span>Weekly Reports</span>
            </div><div className='header-sidebar-IDB'>
                <img src={TasksIDB} alt="internshipimage" />
                <span>Tasks & Deliverables</span>
            </div><div className='header-sidebar-IDB'>
                <img src={Notificationsidb} alt="internshipimage" />
                <span>Notifications</span>
            </div><div className='header-sidebar-IDB'>
                <img src={Certificateidb} alt="internshipimage" />
                <span>Certificates</span>
            </div><div className='header-sidebar-IDB'>
                <img src={Performanceidb} alt="internshipimage" />
                <span>Performance Metrics</span>
            </div>
          </div>
        </div>
  )
}
