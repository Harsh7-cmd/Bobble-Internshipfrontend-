import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Login from './Login.js';
import Signup from './Signup.js';

function App() {
  
  
  return(
    <div className="container">
      <Router>
    <Route exact path="/" component={Login} />
    <Route path="/register" component={Signup} />
    </Router>
  </div>
  );

  }

export default App;
