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
                <div>
                Hi! I'm Cole Vanacore.
                </div>
               <img src={headshot} className="headshot"/>
            </div>
        )
    }
}

export default Home;
