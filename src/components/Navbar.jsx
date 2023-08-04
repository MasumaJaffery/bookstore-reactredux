import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <>
    <nav>
      <div className="nav">
        <h1>Bookstore CMS</h1>
        <ul>
          <li><NavLink to="/" className="nav-link">Books</NavLink></li>
          <li><NavLink to="/categories" className="nav-link">Categories</NavLink></li>
        </ul>
      </div>
      <FaUser />
    </nav>
  </>
);

export default Navbar;
