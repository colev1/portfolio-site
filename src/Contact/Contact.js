import React, {Component} from 'react';
import './Contact.scss'
import headshot from '../images/headshot.jpg'

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <div className="headshot-container">
                  <img src={headshot} className="headshot"/>                    
                  <p> Cole Vanacore </p>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/cole-vanacore/"> LinkedIn </a>
                  <a href="https://www.github.com/colev1"> GitHub </a>
                </div>
            </div>
        )
    }
}

export default Contact;
