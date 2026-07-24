import React from 'react'
import Internsidebar from './Internsidebar'
import "../Interndashboard/Interndashboard.css"
import NavbarIDB from './NavbarIDB'
import SectiononeIDB from './SectiononeIDB'
import CertificatesIDB from './CertificatesIDB'

export default function Interndashboard() {
  return (
    <div className="Content-IDB">
      <Internsidebar />

      <div className="Main-IDB">
        <NavbarIDB />

        <div className="Section-IDB">
          <SectiononeIDB />
        </div>
        <div>
          <CertificatesIDB/>
        </div>
      </div>
    </div>
  )
}