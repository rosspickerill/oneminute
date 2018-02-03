import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import  SignUp from './components/SignUp'

const App = () => (
  
  <div>
  <div>Image Gallery</div>
  <Switch>
  <Route path="/register" component={SignUp} />
  </Switch>
  </div>
  )
  
  
  
  export default App;