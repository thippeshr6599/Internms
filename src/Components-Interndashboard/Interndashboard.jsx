import React, { useState } from "react";
import "../Components-Interndashboard/Interndashboard.css";
import IDBmore from "../assets/ADBmore.png";
import IDBsearch from "../assets/ADBsearch.png";
import IDBnotification from "../assets/ADBnotification.png";
import IDBaccount from "../assets/ADBaccount.png";
import IDBdownarrow from "../assets/ADBdownaeeow.png";
import HomeIDB from "../assets/HomeAdmindash.png";
import MyprofileIDB from "../assets/MyprofileIDB.png";
import InternshipIDB from "../assets/Myinternship.png";
import TasksIDB from "../assets/TasksIDB.png";
import AttendanceIDB from "../assets/AttendanceIDB.png";
import ProjectsIDB from "../assets/ProjectsIDB.png";
import Weeklyreports from "../assets/Weeklyreports.png";
import MentorIDB from "../assets/MentorIDB.png";
import LearningIDB from "../assets/LearningIDB.png";
import ResourcesIDB from "../assets/ResourcesIDB.png";
import Certificateidb from "../assets/Certificatesidb.png";
import SettingsIDB from "../assets/SettingsIDB.png";
import { DashboardMain } from "./DashboardMain";
import { MyprofileMain } from "./MyprofileMain";
import { InternshipMain } from "./InternshipMain";
import { TasksMain } from "./TasksMain";
import { AttendanceMain } from "./AttendanceMain";
import { ReportsMain } from "./ReportsMain";
import { ProjectsMain } from "./ProjectsMain";
import { MentorMain } from "./MentorMain";
import { LearningMain } from "./LearningMain";
import { ResourcesMain } from "./ResourcesMain";
import { CertificatesMain } from "./CertificatesMain";
import { SettingsMain } from "./SettingsMain";


export const InternDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [Show, setShow] = useState(false);


  return (
    <div className={`Content-IDB ${Show ? "Show" : ""}`}>
      <div className={`Sidebar-Content-IDB ${Show ? "Show" : ""}`}>
        <div className="sidebar-menu-IDB">
          <div
            onClick={() => setActiveTab("Dashboard")}
            className={
              activeTab === "Dashboard"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={HomeIDB}
              alt="homeidb"
              style={{ width: "20px", height: "17px" }}
            />
            {!Show && <span>Dashboard</span>}
          </div>

           <div
            onClick={() => setActiveTab("MyProfile")}
            className={
              activeTab === "MyProfile"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={MyprofileIDB}
              alt="myprofileidb"
              style={{ width: "24px", height: "24px" }}
            />
            {!Show && <span>My Profile</span>}
          </div>

          <div
            onClick={() => setActiveTab("Internship")}
            className={
              activeTab === "Internship"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={InternshipIDB}
              alt="internshipidb"
              style={{ width: "21px", height: "21px" }}
            />
            {!Show && <span>Internship</span>}
          </div>

          <div
            onClick={() => setActiveTab("Tasks")}
            className={
              activeTab === "Tasks"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={TasksIDB}
              alt="tasksidb"
              style={{ width: "15px", height: "20px" }}
            />
            {!Show && <span>Tasks</span>}
          </div>

          <div
            onClick={() => setActiveTab("Attendance")}
            className={
              activeTab === "Attendance"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={AttendanceIDB}
              alt="Attendance"
              style={{ width: "24px", height: "24px" }}
            />
            {!Show && <span>Attendance</span>}
          </div>

          <div
            onClick={() => setActiveTab("Reports")}
            className={
              activeTab === "Reports"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={Weeklyreports}
              alt="weeklyreports"
              style={{ width: "17.52px", height: "21.6px" }}
            />
            {!Show && <span>Reports</span>}
          </div>

          <div
            onClick={() => setActiveTab("Projects")}
            className={
              activeTab === "Projects"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={ProjectsIDB}
              alt="projectsidb"
              style={{ width: "24px", height: "24px" }}
            />
            {!Show && <span>Projects</span>}
          </div>

          <div
            onClick={() => setActiveTab("Mentor")}
            className={
              activeTab === "Mentor"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={MentorIDB}
              alt="mentoridb"
              style={{ width: "24px", height: "24px" }}
            />
            {!Show && <span>Mentor</span>}
          </div>

          <div
            onClick={() => setActiveTab("Learning")}
            className={
              activeTab === "Learning"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={LearningIDB}
              alt="Learningidb"
              style={{ width: "24px", height: "24px" }}
            />
            {!Show && <span>Learning</span>}
          </div>

          <div
            onClick={() => setActiveTab("Resources")}
            className={
              activeTab === "Resources"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={ResourcesIDB}
              alt="Resourcesidb"
              style={{ width: "24px", height: "24px" }}
            />
            {!Show && <span>Resources</span>}
          </div>

          <div
            onClick={() => setActiveTab("Certificates")}
            className={
              activeTab === "Certificates"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={Certificateidb}
              alt="certificateidb"
              style={{ width: "18px", height: "17px" }}
            />
            {!Show && <span>Certificates</span>}
          </div>

          <div
            onClick={() => setActiveTab("Settings")}
            className={
              activeTab === "Settings"
                ? "sidebar-item-IDB active-IDB"
                : "sidebar-item-IDB"
            }
          >
            <img
              src={SettingsIDB}
              alt="Settingsidb"
              style={{ width: "24px", height: "24px" }}
            />
            {!Show && <span>Settings</span>}
          </div>
        </div>
      </div>

      <div className="Main-IDB">
        {/* Navbar */}
        <div className="Content-nav">
          <div className="navbar-left">
            <div className="menu-icon" onClick={() => setShow(!Show)}>
              <img
                src={IDBmore}
                alt="abdmore"
                style={{
                  width: "24.06px",
                  height: "24.06px",
                  color: "#003073",
                  cursor: "pointer",
                }}
              />
            </div>

            <div className="dashboard-text">
              <h3>Welcome back, Intern</h3>
              <p>Here's Whats's happening with your internship program.</p>
            </div>
          </div>

          <div className="navbar-right">
            <div className="search-box">
              <span className="search-icon">
                <img
                  src={IDBsearch}
                  alt="abdsearch"
                  style={{ width: "25.06px", height: "25.06" }}
                />
              </span>
              <input type="text" placeholder="Search anything....." />
            </div>
            <div className="notification-icon">
              <img
                src={IDBnotification}
                alt="abdnotification"
                style={{ width: "16px", height: "20px" }}
              />
              <span className="notification-dot"></span>
            </div>
            <div className="profile-section-IDB">
              <div className="profile-icon-IDB">
                <img
                  src={IDBaccount}
                  alt="account"
                  style={{ width: "22.5px", height: "24px" }}
                />
              </div>
              <div className="profile-text-IDB">
                <h4>Intern</h4>
                <p>Intern Dashboard</p>
              </div>
              <div className="dropdown-icon-IDB">
                <img src={IDBdownarrow} alt="ADBarrow" />
              </div>
            </div>
          </div>
        </div>

        {activeTab === "Dashboard" && <DashboardMain />}
        {activeTab === "MyProfile" && <MyprofileMain />}
        {activeTab === "Internship" && <InternshipMain />}
        {activeTab === "Tasks" && <TasksMain />}
        {activeTab === "Attendance" && <AttendanceMain />}
        {activeTab === "Reports" && <ReportsMain />}
        {activeTab === "Projects" && <ProjectsMain />}
        {activeTab === "Mentor" && <MentorMain />}
        {activeTab === "Learning" && <LearningMain />}
        {activeTab === "Resources" && <ResourcesMain />}
        {activeTab === "Certificates" && <CertificatesMain />}
        {activeTab === "Settings" && <SettingsMain/>}
      </div>
    </div>
  );
};