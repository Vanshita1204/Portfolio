import "./Form.css";
import React from 'react'

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
            <button className="btn">Sumbit</button>
        </form>

    </div>
  )
}

export default Form