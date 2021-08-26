import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksList from './components/BooksList';
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
          <BooksList />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </>
  );
}

export default App;
