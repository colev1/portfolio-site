import './Projects.scss'
import React from 'react';

const Projects = () => {
        return (
          <div>
            <h2> past work </h2>
            <div className="projects-container">
              <article>
                  <h3>  AdoptR </h3>
                  <div className="project project-1">
                    <li> Application that allows users to view and swipe through adoptable pets based on their location, email shelters, and text friends about each pet. </li>
                    <li> React Native, Enzyme, Jest, XCode </li>
                    <a href="https://github.com/colev1/cross-poll-fe">
                      <i className="fab fa-github"></i> github repo
                    </a>
                  </div>
              </article>
              <article>
                <h3>Palette Picker </h3>
                <div className="project project-2">
                  <li> An application that allows a user to randomly generate a 'palette' of 5 colors, and then save separate palettes to different project folders. </li>
                    <li> Javascript/JQuery, Node.js, Express </li>
                  <a href="https://github.com/colev1/palette-picker">
                    <i className="fab fa-github"></i> 
                    github repo 
                  </a>
                </div>
              </article>
              <article>
                <h3> Movie Tracker</h3>
                <div className="project project-3">
                  <li> Application created utilizing the Movie DB API to create a personalized movie application allowing users to create accounts, favorite movies, and search for movies.</li>
                  <li> React Redux, Router, Thunk Middleware, Jest, Enzyme</li>
                  <a href="https://github.com/colev1/movie-tracker"> 
                    <i className="fab fa-github"></i> github repo 
                  </a>
                </div>
              </article>
              <article>
                <h3>Swapi Box </h3>
                <div className="project project-4">
                <li> An application that utilizes the Star Wars API by creating fetch calls to different Start Wars themed characters and objects, and rendering them on the page using React.</li>
                <li>  React.js, React Router, CSS, Enzyme </li>
                  <a href="https://github.com/colev1/swapibox"> 
                    <i className="fab fa-github"></i> github repo 
                  </a>
                </div>
              </article>
            </div>
          </div>
    )
}

export default Projects;
