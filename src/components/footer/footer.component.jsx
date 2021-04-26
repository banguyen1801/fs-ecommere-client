import React from 'react';

import './footer.styles.scss';

import FooterTop from '../footer-top/footer-top.component';
import FooterBottom from '../footer-bottom/footer-bottom.component';

const Footer = () => (
  <div className="footer">
    <FooterTop />
    <FooterBottom />
  </div>
);

export default Footer;
