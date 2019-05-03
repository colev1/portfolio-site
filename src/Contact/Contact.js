import React, {Component} from 'react';
import './Contact.scss'
import headshot from '../headshot.jpg'

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <ul>
                <img src={headshot} className="headshot"/>                    
                    <a href="https://www.linkedin.com/in/cole-vanacore/"> LinkedIn </a>
                </ul>
               <ul>
                    <a href="https://www.github.com/colev1"> GitHub </a>
               </ul>
               <ul>
                    <a href="https://www.turing.io"> Explore Turing! </a>
               </ul>
            </div>
        )
    }
}

export default Contact;
