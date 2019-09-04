import React, {Component} from 'react';
import './App.scss';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';


class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <Contact />
        <Projects />
      </div>
    );
  }
}

export default App;
