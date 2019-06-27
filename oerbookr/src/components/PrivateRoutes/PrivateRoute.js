import React from './node_modules/react';
import { Route, Redirect } from './node_modules/react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  const loginToken = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props =>
        loginToken ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
}
