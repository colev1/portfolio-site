import React, {Component} from 'react';
import './Contact.scss'
import headshot from '../images/headshot.jpg'

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <div>
                  <img src={headshot} className="headshot"/>                    
                  Cole Vanacore
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
