import './seller-pagination.styles.scss';
import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
const SellerPagination = () => {
  return (
    <div className="seller-pagination">
      <Pagination count={10} showFirstButton showLastButton />
    </div>
  );
};

export default SellerPagination;
