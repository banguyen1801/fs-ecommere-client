import React, { useState } from 'react';
import './productDetailPage.styles.scss';

import BreadCrump from '../../components/bread-crump/bread-crump.component';
import SuggestionPanel from '../../components/suggestion-panel/suggestion-panel.component';
import ReviewPanel from '../../components/review-panel/review-panel.component';
import ProductInfo from '../../components/product-info/product-info.component';

const ProductDetailPage = () => {
  return (
    <div className="product-detail">
      <BreadCrump />
      <div className="detail-panel">
        <div className="detail-center">
          <div className="extra-images">
            <div className="extra-images__image">image1</div>
            <div className="extra-images__image">image2</div>
            <div className="extra-images__image">image3</div>
            <div className="extra-images__image">image4</div>
          </div>
          <div className="detail-center__main-image">main image</div>
          <ProductInfo />
        </div>
        <div className="detail-right">
          <div className="detail-right__legend">More from Zara</div>
        </div>
      </div>
      <ReviewPanel />
      <SuggestionPanel />
    </div>
  );
};

export default ProductDetailPage;
