import React, {Component} from 'react';
import './App.scss';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import { Route, NavLink } from 'react-router-dom';


class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <NavLink to='/about' className='about'> About Me </NavLink>
          <NavLink to='/projects' className='projects'> Projects </NavLink>
          <NavLink to='/contact' className='contact'> Contact Info </NavLink>
        </nav>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    );
  }
}

export default App;
