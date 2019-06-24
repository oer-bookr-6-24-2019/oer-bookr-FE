import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";
import SingleBookPage from "./views/SingleBookPage";
import AddReviewPage from "./views/AddReviewPage";
import PrivateRoute from './components/PrivateRoutes/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/" exact component={HomePage} />
        <PrivateRoute path="/book/:id" exact component={SingleBookPage} />
        <PrivateRoute path="/add-review/:id" exact component={AddReviewPage} />
      </Switch>
    </div>
  );
}

export default App;
