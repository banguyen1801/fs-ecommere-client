import './product-table-sorters.styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductTableSorters = () => {
  return (
    <div className="seller-product-view-page__table-sorters">
      <div className="seller-product-view-page__table-sorters__title">
        <span>SORT BY</span>
      </div>

      <div className="seller-product-view-page__table-sorters__date-dropdown">
        <button className="date-dropdown-button">Date Added</button>
        <span className="icon icon-chevron-down"></span>
        <div className="date-dropdown-button__contents">
          <div>Today</div>
          <div>This Month</div>
          <div>Within 6 months</div>
          <div>Within 1 year</div>
        </div>
      </div>
      <div className="seller-product-view-page__table-sorters__input-field">
        <span className="icon icon-searchbar"></span>
        <input
          className="seller-product-view-page__table-sorters__input"
          type="text"
          placeholder="search"
        />
      </div>

      <div className="seller-product-view-page__add-product">
        <span className="icon icon-add-solid"></span>
        <Link className="add-product-button__link" to="/sellers/addProducts">
          <button className="add-product-button">Add Product</button>
        </Link>
      </div>

      <div className="seller-product-view-page__table-sorters__exports">
        <span className="icon icon-download"></span>
        <span>Export</span>
      </div>
    </div>
  );
};

export default ProductTableSorters;
