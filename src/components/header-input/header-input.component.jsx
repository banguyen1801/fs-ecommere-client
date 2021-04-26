import React from 'react';

import './header-input.styles.scss';

const HeaderInput = () => (
  <div className="input">
    <input className="input__input-field" type="text" placeholder="search" />
    <span className="icon icon-searchbar"></span>
  </div>
);

export default HeaderInput;
