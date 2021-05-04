import './header-nav-list.styles.scss';
import React from 'react';

import { Link } from 'react-router-dom';
const HeaderNavList = () => {
  return (
    <div className="nav-list">
      <Link to="/products" className="nav-list__link">
        Tops
      </Link>
      <Link to="/products" className="nav-list__link">
        Bottoms
      </Link>
      <Link to="/products" className="nav-list__link">
        Dresses
      </Link>
      <Link to="/products" className="nav-list__link">
        Jackets
      </Link>
      <Link to="/products" className="nav-list__link">
        Shoes
      </Link>
      <Link to="/products" className="nav-list__link">
        Accessories
      </Link>
      <Link to="/products" className="nav-list__link">
        Sale
      </Link>
    </div>
  );
};

export default HeaderNavList;
