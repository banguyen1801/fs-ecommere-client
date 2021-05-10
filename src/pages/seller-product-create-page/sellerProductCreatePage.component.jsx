import './sellerProductCreatePage.styles.scss';
import React from 'react';

import ProductCreationForm from '../../components/seller-product-creation-form/sellerProductCreationForm.component';

const SellerProductCreatePage = () => {
  return (
    <div className="product-creation-page">
      <div className="product-creation-page__title">
        <div>Add Products</div>
        <div className="product-creation-page__title__bread-crump">
          Products / Add product
        </div>
      </div>
      <ProductCreationForm />
    </div>
  );
};

export default SellerProductCreatePage;
