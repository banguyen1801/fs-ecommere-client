import React from 'react';

import './header-bottom.styles.scss';

const HeaderBottom = () => (
  <div className="header-bottom">
    <div className="header-bottom__nav header-bottom__men">
      <span className="header-bottom__title">Mens</span>
      <span className="icon icon-chevron-down"></span>
    </div>
    <div className="header-bottom__nav header-bottom__ladies">
      <span className="header-bottom__title">Ladies</span>
      <span className="icon icon-chevron-down"></span>
    </div>
    <div className="header-bottom__nav header-bottom__girls">
      <span className="header-bottom__title">Girls</span>
      <span className="icon icon-chevron-down"></span>
    </div>
    <div className="header-bottom__nav header-bottom__boys">
      <span className="header-bottom__title">Boys</span>
      <span className="icon icon-chevron-down"></span>
    </div>
  </div>
);

export default HeaderBottom;
