import React from 'react';

import './footer-top.styles.scss';

const FooterTop = () => (
  <div className="footer-top">
    <img
      className="header-top__shop-logo"
      src="/images/logo.svg"
      alt="shop-logo"
    />
    <div className="footer-top__nav">
      <span className="footer-top__nav__nav-items">Home</span>
      <span className="footer-top__nav__nav-items">Products</span>
      <span className="footer-top__nav__nav-items">Service</span>
      <span className="footer-top__nav__nav-items">About Us</span>
      <span className="footer-top__nav__nav-items">Helps</span>
      <span className="footer-top__nav__nav-items">Contacts</span>
    </div>
    <div className="footer-top__icons">
      <span className="icon icon-twitter"></span>
      <span className="icon icon-facebook"></span>
      <span className="icon icon-instagram"></span>
    </div>
  </div>
);

export default FooterTop;
