import './seller-sidebar.styles.scss';
import React from 'react';

import { Link } from 'react-router-dom';

const SellerSidebar = () => {
  return (
    <div className="seller-sidebar">
      <div className="seller-sidebar__shop-logo">
        <Link to="/sellers/products">
          <img
            className="seller-sidebar__logo"
            src="/images/logo.svg"
            alt="shop-logo"
          />
        </Link>
      </div>
      <div className="seller-sidebar__links">
        <Link to="/sellers" className="seller-sidebar__link" href="#home">
          <span className="icon icon-insert_chart"></span>
          Overview
        </Link>
        <Link to="/sellers" className="seller-sidebar__link" href="#services">
          <span className="icon icon-shopping-cart"></span>
          Orders
        </Link>
        <Link to="/sellers" className="seller-sidebar__link" href="#clients">
          <span className="icon icon-th-list"></span>
          Products
        </Link>
        <Link to="/sellers" className="seller-sidebar__link" href="#contact">
          <span className="icon icon-coin-dollar"></span>
          Payments
        </Link>
        <Link to="/sellers" className="seller-sidebar__link" href="#contact">
          <span className="icon icon-tag"></span>
          Promotion
        </Link>
        <Link to="/sellers" className="seller-sidebar__link" href="#contact">
          <span className="icon icon-cog"></span>
          Setting
        </Link>
      </div>
    </div>
  );
};

export default SellerSidebar;
