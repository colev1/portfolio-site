import React, {Component} from 'react';
import './Home.scss'
import headshot from '../images/headshot.jpg'

class Home extends Component {
    constructor() {
        super()
      }

    render() {
        return (
            <div className="home-container">
                <p>
                Hi! I'm Cole.
                </p>
                <p>
                Frontend Web Developer
                </p>
               <img src={headshot} className="headshot"/>
            </div>
        )
    }
}

export default Home;
