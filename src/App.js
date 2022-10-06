import React, { Component } from 'react';
import './app.css';
import PokeGame from './components/PokeGame';

export class App extends Component {
  render() {
    return (
      <div>
        <PokeGame />
      </div>
    );
  }
}

export default App;
