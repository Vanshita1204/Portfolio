import React from 'react'
import SkillCard from './SkillCard'
import SkillCardData from "./SkillsCardData"
import SkillCardDataD from './SkillCardDataD'
import SkillCardDataO from './SkillsCardDataO'


const Skils = () => {
  return (
    <div className="skilled-container">
        <h1 className="skill-heading">Skills</h1>
        <h2 className='skill-type'>Languages</h2>
        <br/>
        <div className="skill-container">
          {SkillCardData.map((val,ind)=>{
            return(
              <SkillCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              />
            )
          })}
        </div>
        <h2 className='skill-type'>Development Tools</h2>
        <br/>
        <div className="skill-container">
          {SkillCardDataD.map((val,ind)=>{
            return(
              <SkillCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              />
            )
          })}
        </div>
        <h2 className='skill-type'>Others</h2>
        <br/>
        <div className="skill-container">
          {SkillCardDataO.map((val,ind)=>{
            return(
              <SkillCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              />
            )
          })}
        </div>
    </div>
  )
}

export default Skils