import React, {Component} from 'react';
// import './About.scss'
import headshot from '../headshot.jpg'

class About extends Component {
    render() {
        return (
            <div className="about-container">
                {/* <div>
                </div> */}
               <img src={headshot} className="headshot"/>
            </div>
        )
    }
}

export default About;
