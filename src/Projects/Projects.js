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
              <article>
                  <h3>  AdoptR </h3>
                  <div className="project project-1">
                    <a href="https://github.com/colev1/cross-poll-fe">
                      <i class="fab fa-github"></i> github repo
                    </a>
                  </div>
              </article>
              <article>
                <h3>Palette Picker </h3>
                <div className="project project-2">
                  <a href="https://github.com/colev1/palette-picker">
                    <i class="fab fa-github"></i> 
                    github repo 
                  </a>
                </div>
              </article>
              <article>
                <h3> Movie Tracker</h3>
                <div className="project project-3">
                  <a href="https://github.com/colev1/movie-tracker"> 
                    <i class="fab fa-github"></i> github repo 
                  </a>
                </div>
              </article>
              <article>
                <h3>Swapi Box </h3>
                <div className="project project-4">
                  <a href="https://github.com/colev1/swapi-box"> 
                    <i class="fab fa-github"></i> github repo 
                  </a>
                </div>
              </article>
            </div>
        )
    }
}

export default Projects;
