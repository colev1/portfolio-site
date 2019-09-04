import React, {Component} from 'react';
import './App.scss';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';


class App extends Component {

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
