import "./Form.css";
import React from 'react'
import { Link } from "react-router-dom"
const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Your Email</label>
            <input type="email"></input>
            <label>Your Subject</label>
            <input type="text"></input>
            <label>Your Message</label>
            <textarea rows="6" placeholder="Type your message here"/>
            <Link to="/" className="btn">Sumbit</Link>
        </form>

    </div>
  )
}

export default Form
