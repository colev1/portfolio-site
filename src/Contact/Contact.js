import React from 'react';
import './Contact.scss'
import headshot from '../images/headshot.jpg'

const Contact = () => {
    return (
      <div className="contact-container">
          <img src={headshot} alt="Headshot" className="headshot"/>
          <h2 className="name"> Cole Vanacore </h2>
          <hr/>
          <p> Frontend Web Developer -- New York City</p>
        <div>
          <a href="https://www.linkedin.com/in/cole-vanacore/"> <i className="fab fa-linkedin"></i> </a>
          <a href="https://www.github.com/colev1"> <i className="fab fa-github"></i>  </a>
          </div>
        </div>
    )
}

export default Contact;
