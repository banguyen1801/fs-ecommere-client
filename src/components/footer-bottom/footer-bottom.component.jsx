import React from 'react';

import './footer-bottom.styles.scss';

const FooterBottom = () => (
  <div className="footer-bottom">
    <div className="footer-bottom__nav">
      <span className="footer-bottom__nav__nav-items">Home</span>
      <span className="footer-bottom__nav__nav-items">Products</span>
      <span className="footer-bottom__nav__nav-items">Services</span>
      <span className="footer-bottom__nav__nav-items">About Us</span>
      <span className="footer-bottom__nav__nav-items">Helps</span>
      <span className="footer-bottom__nav__nav-items">Contracts</span>
    </div>
    <div className="footer-bottom__policies">
      <span className="footer-bottom__policies__policies-items">
        Privacy Policies
      </span>
      <span className="footer-bottom__policies__policies-items">
        Terms and Conditions
      </span>
    </div>
  </div>
);

export default FooterBottom;
