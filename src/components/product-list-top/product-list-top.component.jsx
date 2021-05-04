import './product-list-top.styles.scss';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown } from 'react-bootstrap';

import ProductPagination from '../product-pagination/product-pagination.component';

import {
  setCurrentProductSort,
  fetchProductAdvancedAsync,
} from '../../redux/product/product.actions';

const ProductListTop = () => {
  const dispatch = useDispatch();
  const isInitialMount = useRef(true);
  const { currentSort, currentPage, currentCategories } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(
        fetchProductAdvancedAsync({
          currentSort,
          currentCategories,
          currentPage,
        })
      );
    }
    // eslint-disable-next-line
  }, [currentSort]);

  return (
    <div className="top-pagination">
      <Dropdown>
        <Dropdown.Toggle className="dropdown-toggle">
          Sort by: {currentSort}
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item
            onSelect={() => dispatch(setCurrentProductSort('Popularity'))}
          >
            Popularity
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => dispatch(setCurrentProductSort('A-Z'))}
          >
            Name: A-Z
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => dispatch(setCurrentProductSort('Z-A'))}
          >
            Name: Z-A
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => dispatch(setCurrentProductSort('highestPrice'))}
          >
            Price: Highest Price
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => dispatch(setCurrentProductSort('lowestPrice'))}
          >
            Price: Lowest Price
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <ProductPagination />
    </div>
  );
};

export default ProductListTop;
