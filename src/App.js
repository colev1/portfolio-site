import React, {Component} from 'react';
import './App.scss';
import Home from './Home/Home';
import { Route, NavLink } from 'react-router-dom';


class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <NavLink to='/projects' className='projects'> Projects </NavLink>
          <NavLink to='/about' className='about'> About Me </NavLink>
          <NavLink to='/contact' className='contact'> Contact Info </NavLink>
        </nav>
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;
