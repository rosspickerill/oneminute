import React from 'react';
import logo from './1min.gif';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import SignUp from './components/SignUp';
import Home from './components/Home';
import RegistrationSuccess from './components/Registration/RegistrationSuccess'

const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">1minute App</h1>
        </header>
        <div className="view-container" >

        <Switch>
          <Route path='/registration/:id' component={RegistrationSuccess} />
          <Route path="/register" component={SignUp} />
          <Route path="/" component={Home} />
        </Switch>

       </div>
      </div>
    );
}

export default App;