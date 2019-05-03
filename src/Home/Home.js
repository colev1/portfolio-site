import React, {Component} from 'react';
import './Home.scss'
import headshot from '../headshot.jpg'

class Home extends Component {
    constructor() {
        super()
      }

    render() {
        return (
            <div>
                Hi!
               I'm Cole Vanacore.
               <img src={headshot} className="headshot"/>
            </div>
        )
    }
}

export default Home;
