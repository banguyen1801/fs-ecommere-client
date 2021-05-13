import React from 'react';
import './menu-item.styles.scss';

import { Link } from 'react-router-dom';
import { urlFormatter } from '../../utils/misc/formatters';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => (
  <div
    style={{
      backgroundImage: `url(${urlFormatter(imageUrl[0])})`,
    }}
    className={` ${size} menu-item `}
  >
    <div className="content">
      <Link to={`/customers/${linkUrl}`} className="content__cover-link">
        <h1 className="content__title">{title}</h1>
        <span className="content__subtitle">SHOP NOW</span>
      </Link>
    </div>
  </div>
);

export default MenuItem;
