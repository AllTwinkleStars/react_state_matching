import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'

import './App.css';

class App extends Component{

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel />
        <Board />
      }
    </div>
  );

  }
}

export default App;
