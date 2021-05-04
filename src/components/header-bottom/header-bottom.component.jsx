import './header-bottom.styles.scss';
import React, { useState } from 'react';

import HeaderNavList from '../header-nav-list/header-nav-list.component';

const HeaderBottom = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="header-bottom">
      <div className="header-bottom__nav header-bottom__men">
        <span className="header-bottom__title">Mens</span>
        <span className="icon icon-chevron-down"></span>
      </div>
      <div
        className="header-bottom__nav header-bottom__ladies"
        onClick={() => setShow(!show)}
      >
        <span className="header-bottom__title">Ladies</span>
        <span className="icon icon-chevron-down"></span>
        {show ? <HeaderNavList /> : null}
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
};

export default HeaderBottom;
