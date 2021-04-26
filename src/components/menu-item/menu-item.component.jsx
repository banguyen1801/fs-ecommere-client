import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
    className={` ${size} menu-item `}
  >
    <div className="content">
      <h1 className="content__title">{title.toUpperCase()}</h1>
      <span className="content__subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
