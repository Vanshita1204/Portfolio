import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Work from '../components/Work.js'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works."/>
      <br/>
      <Work/>

      <Footer/>
    </div>
  )
}

export default Project;