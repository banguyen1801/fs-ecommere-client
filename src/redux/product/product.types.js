const productActionTypes = {
  FETCH_ALL_PRODUCT: 'FETCH_ALL_PRODUCT',
  FETCH_ALL_PRODUCT_START: 'FETCH_ALL_PRODUCT_START',
  FETCH_ALL_PRODUCT_SUCCESS: 'FETCH_ALL_PRODUCT_SUCCESS',
  FETCH_ALL_PRODUCT_FAILED: 'FETCH_ALL_PRODUCT_FAILED',
  SET_PRODUCT_CURRENT_PAGE: 'SET_PRODUCT_CURRENT_PAGE',
  SET_PRODUCT_CURRENT_SORT: 'SET_PRODUCT_CURRENT_SORT',
  SET_PRODUCT_CURRENT_CATEGORIES: 'SET_PRODUCT_CURRENT_CATEGORIES',
  FETCH_PRODUCT_ADVANCE_START: 'FETCH_PRODUCT_ADVANCE_START',
  FETCH_PRODUCT_ADVANCE_FAILED: 'FETCH_PRODUCT_ADVANCE_FAILED',
  FETCH_PRODUCT_ADVANCE_SUCCESS: 'FETCH_PRODUCT_ADVANCE_SUCCESS',
  FETCH_ONE_PRODUCT_START: 'FETCH_ONE_PRODUCT_START',
  FETCH_ONE_PRODUCT_FAILED: 'FETCH_ONE_PRODUCT_FAILED',
  FETCH_ONE_PRODUCT_SUCCESS: 'FETCH_ONE_PRODUCT_SUCCESS',

  SELLER_FETCH_PRODUCT_SUCCESS: 'SELLER_FETCH_PRODUCT_SUCCESS',
  SELLER_FETCH_PRODUCT_FAILED: 'SELLER_FETCH_PRODUCT_FAILED',
  SELLER_FETCH_PRODUCT_START: 'SELLER_FETCH_PRODUCT_START',
  SELLER_SET_CURRENT_PAGE: 'SELLER_SET_CURRENT_PAGE',
  SELLER_SET_PRODUCT_PER_PAGE: 'SELLER_SET_PRODUCT_PER_PAGE',

  SELLER_DELETE_PRODUCT: 'SELLER_DELETE_PRODUCT',
};

export default productActionTypes;
