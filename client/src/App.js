import React, { Component } from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Body />
      </div>
    );
  }
}

export default App;
