import React, { useState, useMemo, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Navbar from 'components/molecules/Navbar';
import Homepage from 'components/organisms/Homepage';
import ResetPass from 'components/organisms/ResetPass';
import Footer from 'components/molecules/Footer';
import Authenticate from 'components/organisms/Authenticate'
import Dashboard from 'components/organisms/Dashboard';

// context
import { UserContext } from 'contexts/userContext';

const App = () => {
  const [user, setUser] = useState({});

  const providedUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('user');

    if (typeof userLoggedIn !== 'undefined') {
      console.log('USRLG', userLoggedIn);
      try {
        const foundUser = JSON.parse(userLoggedIn);
        setUser(foundUser);
      } catch (err) {
        console.log(err);
        console.log('Not a JSON');
      }
    }
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ providedUser }}>
        <Navbar />
        <div style={{ minHeight: '80vh' }}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" render={() => <Authenticate action='login' />} />
            <Route path="/register" render={() => <Authenticate action='register' />} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/reset" component={ResetPass} />
          </Switch>
        </div>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
