import './order-table-sorters.styles.scss';
import React from 'react';

const OrderTableSorters = () => {
  return (
    <div className="seller-order-page__table-sorters">
      <div className="seller-order-page__table-sorters__title">
        <span>ORDERED DATE</span>
      </div>
      <div className="seller-order-page__table-sorters__calendar-input">
        <span>01/01/2020 - 01/01/2021</span>
        <span className="icon icon-calendar"></span>
      </div>
      <div className="seller-order-page__table-sorters__today-input">
        <span>Today</span>
      </div>
      <div className="seller-order-page__table-sorters__yesterday-input">
        <span>Yesterday</span>
      </div>
      <div className="seller-order-page__table-sorters__input-field">
        <input
          className="seller-order-page__table-sorters__input"
          type="text"
          placeholder="search"
        />
        <span className="icon icon-searchbar"></span>
      </div>

      <div className="seller-order-page__table-sorters__exports">
        <span className="icon icon-download"></span>
        <span>Export</span>
      </div>
    </div>
  );
};

export default OrderTableSorters;
