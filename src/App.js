import React, {Component} from 'react';
import './App.css';
import Home from './Home/Home';
import Main from './Main/Main';
import { Route, NavLink } from 'react-router-dom';


class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <NavLink to='/projects' className='projects'> Projects </NavLink>
        <NavLink to='/about' className='about'> About Me </NavLink>
        <NavLink to='/contact' className='contact'> Contact Info </NavLink>
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;
