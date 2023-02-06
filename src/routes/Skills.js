import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Skils from'../components/Skils'

const Skills = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="SKILLS." text="Some skills I've built along the way."/>
      <Skils/>
      <Footer/>
    </div>
  )
}

export default Skills