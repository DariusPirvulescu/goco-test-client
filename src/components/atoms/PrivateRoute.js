import React from 'react';

import { Route, Redirect } from 'react-router-dom';

// import { UserContext } from 'contexts/userContext';

function PrivateRoute({ component: Component, ...rest }) {
  // const { providedUser } = useContext(UserContext);

  return (
    <Route 
      {...rest}
      render={(props) => {
        return localStorage.getItem('user') ? <Component {...props} /> : <Redirect to="/login" />
      }}
    />
  );
}

export default PrivateRoute;