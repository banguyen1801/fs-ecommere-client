import './product-pagination.styles.scss';
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setCurrentProductPage,
  fetchProductAdvancedAsync,
} from '../../redux/product/product.actions';

const ProductPagination = () => {
  const productStore = useSelector((state) => state.product);
  const isInitialMount = useRef(true);
  const { maxPage, currentPage, currentCategories, currentSort } = productStore;

  const dispatch = useDispatch();

  const handleIncreasePage = () => {
    if (currentPage < maxPage) {
      dispatch(setCurrentProductPage(currentPage + 1));
    }
  };

  const handleDecreasePage = () => {
    if (currentPage >= 2) {
      dispatch(setCurrentProductPage(currentPage - 1));
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(
        fetchProductAdvancedAsync({
          currentPage,
          currentCategories,
          currentSort,
        })
      );
    }
    // eslint-disable-next-line
  }, [currentPage]);
  return (
    <div className="pagination">
      <span
        className="icon icon-navigate_before"
        onClick={() => handleDecreasePage()}
      ></span>
      <span className="page-number">
        {currentPage}/{maxPage ? maxPage : 1}
      </span>
      <span
        className="icon icon-navigate_next"
        onClick={() => handleIncreasePage()}
      ></span>
    </div>
  );
};

export default ProductPagination;
