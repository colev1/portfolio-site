import React, {Component} from 'react';
import './Contact.scss'
import headshot from '../images/headshot.jpg'

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <div className="headshot-container">
                  <img src={headshot} alt="Headshot" className="headshot"/>                    
                  <p> Cole Vanacore </p>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/cole-vanacore/"> <i className="fab fa-linkedin"></i> </a>
                  <a href="https://www.github.com/colev1"> <i className="fab fa-github"></i>  </a>
                </div>
            </div>
        )
    }
}

export default Contact;
