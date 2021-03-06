import React, { useState, useMemo, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'theme/';

import PrivateRoute from 'components/atoms/PrivateRoute';
import Navbar from 'components/molecules/Navbar';
import Homepage from 'components/organisms/Homepage';
import ResetPass from 'components/organisms/ResetPass';
import Footer from 'components/molecules/Footer';
import Authenticate from 'components/organisms/Authenticate';
import Dashboard from 'components/organisms/Dashboard';

// context
import { UserContext } from 'contexts/userContext';

const App = () => {
  const [user, setUser] = useState({});

  const providedUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('user');

    if (typeof userLoggedIn !== 'undefined') {
      try {
        const foundUser = JSON.parse(userLoggedIn);
        setUser(foundUser);
      } catch (err) {
        /* eslint-disable no-console */
        console.log(err);
        /* eslint-enable no-console */
      }
    }
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ providedUser }}>
          <Navbar />
          <div style={{ minHeight: '80vh' }}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route
                path="/login"
                render={() => <Authenticate action="login" />}
              />
              <Route
                path="/register"
                render={() => <Authenticate action="register" />}
              />
              <Route path="/reset" component={ResetPass} />
              <Route component={Homepage} />
            </Switch>
          </div>
          <Footer />
        </UserContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
