import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Bookstore from './components/Bookstore';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import CreateNewBook from './components/CreateNewBook';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <CreateNewBook />
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
