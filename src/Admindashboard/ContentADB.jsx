import React from 'react'
import "../Admindashboard.css/ContentADB.css"
import Totalinterns from "../assets/Totalinterns.png"

export default function ContentADB() {
  return (
    <div className='Dashboard-panel-ADB'>
      <div className='Welcome-content-ADB'>
             <h2>Welcome back,Internms!</h2>
             <p>Details of Internship program</p>
        <div className='Interndetails-Content-ADB'>
         <div className='Intern-details-ADB'>
            <div className='Intern-total-ADB'>
                   <img src={Totalinterns} alt="totalintern" />
                <div className='Total-details-ADB'>
                    <h3>Total Interns</h3>
                    <h2>128</h2>
                    <p><span style={{color:"#139320"}}>12.5%</span> from Last Month</p>
                </div>
            </div>
            </div>
            <div className='Intern-details-ADB'>
            <div className='Intern-total-ADB'>
                   <img src={Totalinterns} alt="totalintern" />
                <div className='Total-details-ADB'>
                    <h3>Total Interns</h3>
                    <h2>128</h2>
                    <p><span style={{color:"#139320"}}>12.5%</span> from Last Month</p>
                </div>
            </div>
            </div>
            <div className='Intern-details-ADB'>
            <div className='Intern-total-ADB'>
                   <img src={Totalinterns} alt="totalintern" />
                <div className='Total-details-ADB'>
                    <h3>Total Interns</h3>
                    <h2>128</h2>
                    <p><span style={{color:"#139320"}}>12.5%</span> from Last Month</p>
                </div>
            </div>
            </div>
            <div className='Intern-details-ADB'>
            <div className='Intern-total-ADB'>
                   <img src={Totalinterns} alt="totalintern" />
                <div className='Total-details-ADB'>
                    <h3>Total Interns</h3>
                    <h2>128</h2>
                    <p><span style={{color:"#139320"}}>12.5%</span> from Last Month</p>
                </div>
            </div>
            </div>
        </div> 
      </div>
    </div>
  )
}
