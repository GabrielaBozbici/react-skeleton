import React, { Component } from 'react';
import ListManager from './components/ListManager.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListManager title="Ingredients" />
        <ListManager title="To-Do List" />
        <ListManager title="Christmas" headingColor="#b31217" />
      </div>
    );
  }
}

export default App;
