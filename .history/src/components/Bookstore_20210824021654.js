import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calculator.css';

const Bookstore = () => {

  return (
    <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
      </Switch>
  )
}