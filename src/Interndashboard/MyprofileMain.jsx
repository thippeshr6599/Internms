import React from 'react'
import "../Interndashboard/MyprofileMain.css";
import Techflowcompanyicon from "../assets/Technoflowsolutions.png";
import Companydurationprofile from "../assets/Companyduration.png";
import Editprofileintern from "../assets/Editprofileintern.png";
import TasksIcon from "../assets/Tasksdoneintern.png";
import TrainingIcon from "../assets/Trainingmodules.png";
import AssessmentIcon from "../assets/Assesmentspassed.png";
import CertificateIcon from "../assets/Certificatesprofile.png";

export const  MyprofileMain = () => {
      
      const ProfileData = {
        initials:"AK",
        name: "Akshara",
        role: "SOFTWARE INTERN",
        status: "ACTIVE",
        employeeId: "INT-2026-0042",
        department: "Product Development",
        companyicon: Techflowcompanyicon,
        company: "TechFlow Solutions",
        duration: "6 Months Duration",
       }

      const ProfileStatsData = [
           {
              id: 1,
              icon: TasksIcon,
              count: "12",
              title: "Tasks Done",
           },
           {
              id: 2,
              icon: TrainingIcon,
              count: "06",
              title: "Training Modules",
           },
           {
              id: 3,
              icon: AssessmentIcon,
              count: "03",
              title: "Assessments",
              subtitle: "Passed",
           },
           {
              id: 4,
              icon: CertificateIcon,
              count: "08",
              title: "Certificates",
           },
        ];


  return (
    <div className='Profile-content-Intern'>
      <div className='Profile-Section-Intern'>
         <div className='Profile-info-Intern'>
            <h2>{ProfileData.initials}</h2>
         </div>
         <div className='Profile-deatils-Intern'>
          <div className='Profile-name-row'>
              <h2>{ProfileData.name}</h2>
              <span className='Profile-role-Intern'>{ProfileData.role}</span>
              <span className='Profile-status-Intern'>{ProfileData.status}</span>
          </div>
           <p className='Profile-ID-Intern'>
            ID: {ProfileData.employeeId}
            <span > . </span>
            Dept: {ProfileData.department}
          </p>
          <div className="Profile-company-duration">
            <span> 
              <img 
              src={ProfileData.companyicon} 
              alt="" 
              style={{width:"14.45px", height:"13.12px"}}
               /> 
               {ProfileData.company}
               </span>
            <span>
              <img 
              src={Companydurationprofile} 
              alt="company duration"
              className='Profile-durationimg-Intern'
               /> 
              {ProfileData.duration}
              </span>
          </div>
         </div>
         <div className='Profile-btn-Intern'>
            <button className='Editprofile-btn-Intern'>
               <img
                src={Editprofileintern} 
                alt="Editprofileintern" 
                style={{width:"17px", height:"17px"}}
               />
               Edit Profile</button>
         </div>
      </div>

      <div className='Profile-statscont-Intern'>
        {ProfileStatsData.map((item) => (
          <div className='Profile-statcard-Intern' key={item.id}>
            
            <div className='Profile-staticon-Intern'>
              <img src={item.icon} alt={item.title} />
            </div>

            <div className='Profile-statcount-Intern'>
                 {item.count}
            </div>

            <div className='Profile-stattitle-Intern'>
               {item.title} <br />{item.subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
