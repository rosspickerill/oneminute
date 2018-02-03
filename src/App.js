import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="view-container" >
          <Route path="/" component={SignUp} />

       </div>
      </div>
    );
  }
}

export default App;