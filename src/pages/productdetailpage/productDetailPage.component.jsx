import './productDetailPage.styles.scss';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import BreadCrump from '../../components/bread-crump/bread-crump.component';
import SuggestionPanel from '../../components/suggestion-panel/suggestion-panel.component';
import ReviewPanel from '../../components/review-panel/review-panel.component';
import ProductInfo from '../../components/product-info/product-info.component';

import { fetchOneProductAsync } from '../../redux/product/product.actions';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const oneProduct = useSelector((state) => state.product.singleProduct);

  useEffect(() => {
    dispatch(fetchOneProductAsync({ id }));
    // eslint-disable-next-line
  }, [dispatch]);

  const { imageUrl = [] } = oneProduct || {};

  return !imageUrl.length ? null : (
    <div className="product-detail">
      <BreadCrump />
      <div className="detail-panel">
        <div className="detail-center">
          <div className="extra-images">
            {imageUrl.length === 0
              ? null
              : imageUrl.map((url, id) => (
                  <div
                    key={id}
                    style={{ backgroundImage: `url(${url})` }}
                    className="extra-images__image"
                  ></div>
                ))}
          </div>
          <div
            style={{
              backgroundImage: `url(${imageUrl.length && imageUrl[0]})`,
            }}
            className="detail-center__main-image"
          ></div>
          <ProductInfo item={oneProduct} />
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
