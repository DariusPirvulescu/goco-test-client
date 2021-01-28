import React from "react";

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./Homepage";
import Login from "./Login";
import Register from "./Register";

const App = () => {
  return (
    <Router>
      <h1>App</h1>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      </Switch>
    </Router>
  )
}

export default App;