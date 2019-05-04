import './Projects.scss'
import React, {Component} from 'react';
import movietracker from '../images/movietracker-image.png';
import adoptr from '../images/adoptr-image.png';
import palette from '../images/palette-image.png';
import swapibox from '../images/swapibox-image.png';

class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
              <article className="project-1">
                  <h3>  AdoptR </h3>
                  <a href="https://github.com/colev1/cross-poll-fe"> GitHub repo </a>
              </article>
              <article className="project-2">
                <h3>Palette Picker </h3>
                <a href="https://github.com/colev1/palette-picker"> GitHub repo </a>
              </article>
              <article className="project-3">
                <h3> Movie Tracker</h3>
                <a href="https://github.com/colev1/movie-tracker"> GitHub repo </a>
              </article>
              <article className="project-4">
                <h3>Swapi Box </h3>
                <a href="https://github.com/colev1/swapi-box"> GitHub repo </a>
              </article>
            </div>
        )
    }
}

export default Projects;
