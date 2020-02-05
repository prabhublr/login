import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Login} />
        <Route path={'/dashboard'} component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
