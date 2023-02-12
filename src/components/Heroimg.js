import "./Heroimg.css";
import React from 'react';
import Intro from "../assets/intro.jpeg";
import { Link } from "react-router-dom";
import "../index.css"
const Heroimg = () => {
  return (
    <div className="hero">
     
      <div className="mask">
        <img className="intro-img" src={Intro} alt="Intro"></img>
      </div>
      <div className="content">
        <h1 className="typed-out">Hello World!</h1>
        <h1> I AM VANSHITA.</h1>
        <p>
         I am a coder, skilled up with in-demand full stack development tools. I have a problem-solving step by step thinking approach. I aspire to be an exceptional coder and deploy my skills into efficiency and scalability.
        </p>
        <div>
        <Link to="/projects" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </div>
     
      </div>
      
    </div>
  );
};


export default Heroimg