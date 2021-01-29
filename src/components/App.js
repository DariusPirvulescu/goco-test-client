import React, { useState, useMemo, useEffect } from "react";

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

// context
import { UserContext } from "contexts/userContext";

import Navbar from "components/Navbar";
import Homepage from "components/Homepage";
import Login from "components/Login";
import Register from "components/Register";
import ResetPass from "components/ResetPass";

const App = () => {
  const [user, setUser] = useState({});

  const providedUser = useMemo(() => ({ user, setUser }), [user, setUser])



  useEffect(() => {
    const userLoggedIn = localStorage.getItem("user");

    if (typeof userLoggedIn !== 'undefined') {
      console.log("USRLG", userLoggedIn)
      try {
        const foundUser = JSON.parse(userLoggedIn);
        setUser(foundUser);

      } catch(err) {
        console.log(err)
        console.log("Not a JSON")
      }
    }
  }, []);

  return (
    <Router>
      <p>use: {user && user.email }</p>
      <UserContext.Provider value={{providedUser}}>
        <Navbar /> 
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/reset' component={ResetPass} />
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}

export default App;