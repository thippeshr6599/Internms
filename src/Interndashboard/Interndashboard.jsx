import React from 'react'
import Internsidebar from './Internsidebar'
import "../Interndashboard/Interndashboard.css"
import NavbarIDB from './NavbarIDB'
import SectiononeIDB from './SectiononeIDB'

export default function Interndashboard() {
  return (
    <div className="Content-IDB">
      <Internsidebar />

      <div className="Main-IDB">
        <NavbarIDB />

        <div className="Section-IDB">
          <SectiononeIDB />
        </div>
      </div>
    </div>
  )
}