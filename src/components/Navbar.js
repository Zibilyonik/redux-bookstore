import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <div className="header w-100 navbar-container-style py-3 rounded border-bottom">
      <span className="h1 title-style me-5 title-style">Redux Bookstore</span>
      <nav className="navBar my-3 d-inline">
        {links.map((link) => <span key={link.id} className="mx-2"><NavLink to={link.path} className="links-style" activeClassName="active-link" exact>{link.text}</NavLink></span>)}
      </nav>
    </div>
  );
};
export default Navbar;
