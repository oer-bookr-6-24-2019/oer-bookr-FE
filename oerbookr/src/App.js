import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './views/LoginPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/login' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
