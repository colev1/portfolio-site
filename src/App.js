import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
