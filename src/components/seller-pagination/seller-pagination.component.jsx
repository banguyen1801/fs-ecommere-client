import './seller-pagination.styles.scss';
import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

// import { setCurrentPage } from '../../redux/order/order.actions';

const SellerPagination = ({
  handlePageChange,
  currentPage = 1,
  maxPage = 5,
}) => {
  const handleChange = (event, newPage) => {
    handlePageChange(newPage);
  };

  return (
    <div className="seller-pagination">
      <Pagination
        page={currentPage}
        onChange={handleChange}
        count={maxPage}
        showFirstButton
        showLastButton
      />
    </div>
  );
};

export default SellerPagination;
