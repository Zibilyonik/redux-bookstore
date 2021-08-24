import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Bookstore from './components/Bookstore';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Bookstore />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </>
  );
}

export default App;
