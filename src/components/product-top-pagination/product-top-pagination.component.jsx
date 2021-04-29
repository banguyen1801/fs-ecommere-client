import './product-top-pagination.styles.scss';
import React, { useState } from 'react';

import { Dropdown } from 'react-bootstrap';

const TopPagination = () => {
  const [sortOption, setSortOption] = useState('Popularity');
  return (
    <div className="top-pagination">
      <Dropdown>
        <Dropdown.Toggle className="dropdown-toggle">
          Sort by: {sortOption}
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item onClick={() => setSortOption('Popularity')}>
            Popularity
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSortOption('A-Z')}>
            Name: A-Z
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSortOption('Z-A')}>
            Name: Z-A
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSortOption('Highest Price')}>
            Price: Highest Price
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSortOption('Lowest Price')}>
            Price: Lowest Price
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="pagination">
        <span className="icon icon-navigate_before"></span>
        <span className="page-number">1/1</span>
        <span className="icon icon-navigate_next"></span>
      </div>
    </div>
  );
};

export default TopPagination;
