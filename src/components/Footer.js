import "./Footer.css";
import React from 'react';
import {FaHome, FaPhone,FaMailBulk ,FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem" } }/>

                    <div>
                        <p>Delhi, India.</p>
                        <p>110007</p>
                    </div>                
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#f0f0f0", marginRight:"2rem" } }/>
                   +91 7355042461</h4>

                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#f0f0f0", marginRight:"2rem" } }/>
                   vanshitajain1204@gmail.com</h4>

                </div>
            </div>
            <div className="right">
                <div>
                <h4>Social Media</h4>
                <p>You can ping me at: </p>
                </div>
                
                <div class="social">
                    <a href="https://instagram.com/vanshita_jain__?igshid=MWI4MTIyMDE=">
                    <FaInstagram size={20}  style={{color:"#fff", marginRight:"2rem" } }/>

                    </a>
                    <a href="https://www.linkedin.com/in/vanshita-jain-95a719204/">
                    <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem" } }/>

                    </a>
                    <a href="https://github.com/Vanshita1204">
                    <FaGithub size={20}  style={{color:"#fff", marginRight:"2rem" } }/>

                    </a>
                </div>      
            </div>
        </div>
    </div>
  )
}

export default Footer