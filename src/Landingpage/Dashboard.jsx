import { useState } from "react";
import "../Style.css/Dashboard.css"
import officeImg from "../assets/Collaborative Modern Office.png";
import LRrightmark from "../assets/LRightmark.png"

function Dashboard() {
  const [active, setActive] = useState("Students");

  return (
    <section className="dashboard">
      <div className="dashboard-content">
        <h2>
          For Students:
          <br />
          <span>Your Career Launchpad.</span>
        </h2>

        <div className="feature">
          <div className="check"><img src={LRrightmark} alt="" style={{width:"18px"}} /></div>
          <div>
            <h4>One-click Applications</h4>
            <p>
              Apply to top-tier firms instantly with your verified profile.
            </p>
          </div>
        </div>

        <div className="feature">
          <div className="check"><img src={LRrightmark} alt="" style={{width:"18px"}}  /></div>
          <div>
            <h4>AI Career Coaching</h4>
            <p>
              Personalized insights to help you stand out and land the role.
            </p>
          </div>
        </div>

        <div className="feature">
          <div className="check"><img src={LRrightmark} alt="" style={{width:"18px"}} /></div>
          <div>
            <h4>Verified Credentials</h4>
            <p>
              A portable digital record of your internship success.
            </p>
          </div>
        </div>

        <div className="tabs">
          <button
            className={active === "Students" ? "active" : ""}
            onClick={() => setActive("Students")}
          >
            Students
          </button>

          <button
            className={active === "Employers" ? "active" : ""}
            onClick={() => setActive("Employers")}
          >
            Employers
          </button>

          <button
            className={active === "Universities" ? "active" : ""}
            onClick={() => setActive("Universities")}
          >
            Universities
          </button>
        </div>

      </div>


      <div className="dashboard-image">
        <div className="image-card">
          <img src={officeImg} alt="Office" />
        </div>
      </div>

    </section>
  );
}

export default Dashboard;