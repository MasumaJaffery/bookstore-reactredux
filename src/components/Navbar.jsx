import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav>
      <h1>Bookstore CMS</h1>
      <div>
        <ul>
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/categories" className="nav-link">Categories</NavLink></li>
        </ul>
      </div>
    </nav>
  </>
);

export default Navbar;
