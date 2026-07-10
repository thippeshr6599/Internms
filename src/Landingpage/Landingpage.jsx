import React from 'react'
import Navbar from "./Navbar"
import Hero from "./Hero"
import Stats from "./Stats"
import Features from "./Features"
import Dashboard from "./Dashboard"
import Footer from "./Footer"

export default function Landingpage() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Stats/>
     <Features/>
     <Dashboard/>
     <Footer/>
    </div>
  )
}
