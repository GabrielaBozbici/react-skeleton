import React, { Component } from 'react';
import ListManager from './components/ListManager.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListManager title="Ingredients" />
      </div>
    );
  }
}

export default App;
