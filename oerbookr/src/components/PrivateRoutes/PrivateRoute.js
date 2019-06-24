import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const loginToken = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={props =>
        loginToken ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

state = {
    username: '',
    password: '',
    loginCheck: false
}