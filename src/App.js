import React, { Component } from 'react';
import './app.css';
import Todo from './components/todo/Todo';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Todo />
      </div>
    );
  }
}

export default App;
