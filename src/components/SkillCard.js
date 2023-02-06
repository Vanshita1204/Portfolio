import "./Skils.css"
import React from 'react'


const SkillCard = (props) => {
  return (
        <div className="skill-card">
            <img src={props.imgsrc} alt="image1"/>
            <h2 className="skill-title">{props.title}</h2>
        </div>
    )
}

export default SkillCard