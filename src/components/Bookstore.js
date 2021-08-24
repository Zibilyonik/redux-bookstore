import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calculator.css';

const Bookstore = () => (
  <Switch>
    <Route exact path="/">
      <div id="Books" />
    </Route>
    <Route path="/categories">
      <h1>Under Construction</h1>
    </Route>
  </Switch>
);

export default Bookstore;
