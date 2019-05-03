import React, {Component} from 'react';
import './Projects.scss'

class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
              <article className="article-1">
                AdoptR
                <a href="https://github.com/colev1/cross-poll-fe"> GitHub repo </a>
              </article>
              <article>
                Palette Picker
                <a href="https://github.com/colev1/palette-picker"> GitHub repo </a>
              </article>
              <article>
                Movie Tracker
                <a href="https://github.com/colev1/movie-tracker"> GitHub repo </a>
              </article>
              <article>
                Swapi Box
                <a href="https://github.com/colev1/swapi-box"> GitHub repo </a>
              </article>
            </div>
        )
    }
}

export default Projects;
