import axios from 'axios';
import productActionTypes from './product.types';

export const fetchAllProductStart = () => ({
  type: productActionTypes.FETCH_ALL_PRODUCT_START,
});

export const fetchAllProductFailed = (errMessage) => ({
  type: productActionTypes.FETCH_ALL_PRODUCT_FAILED,
  payload: errMessage,
});

export const fetchAllProductSuccess = (response) => ({
  type: productActionTypes.FETCH_ALL_PRODUCT_SUCCESS,
  payload: response,
});

export const fetchAllProductAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchAllProductStart());
      const response = await axios.get(
        `http://localhost:5000/api/products/all`,
        {
          query: {
            page: 1,
            limit: 15,
          },
        }
      );
      if (response) dispatch(fetchAllProductSuccess(response.data));
    } catch (err) {
      dispatch(fetchAllProductFailed(err.message));
    }
  };
};

export const setCurrentProductSort = (sort) => ({
  type: productActionTypes.SET_PRODUCT_CURRENT_SORT,
  payload: sort,
});

export const setCurrentProductPage = (page) => ({
  type: productActionTypes.SET_PRODUCT_CURRENT_PAGE,
  payload: page,
});

export const setCurrentProductCategories = (categories) => ({
  type: productActionTypes.SET_PRODUCT_CURRENT_CATEGORIES,
  payload: categories,
});

export const fetchProductAdvancedStart = () => ({
  type: productActionTypes.FETCH_PRODUCT_ADVANCE_START,
});

export const fetchProductAdvancedFailed = (errMessage) => ({
  type: productActionTypes.FETCH_PRODUCT_ADVANCE_FAILED,
  payload: errMessage,
});

export const fetchProductAdvancedSuccess = (response) => ({
  type: productActionTypes.FETCH_PRODUCT_ADVANCE_SUCCESS,
  payload: response,
});

export const fetchProductAdvancedAsync = ({
  currentSort,
  currentPage,
  currentCategories,
}) => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductAdvancedStart());
      const product = await axios.get(
        'http://localhost:5000/api/products/advanced',
        {
          params: {
            page: currentPage,
            categories: currentCategories,
            sort: currentSort,
          },
        }
      );
      if (!product.length) dispatch(fetchProductAdvancedSuccess(product.data));
    } catch (err) {
      dispatch(fetchAllProductFailed(err.message));
    }
  };
};

export const fetchOneProductStart = () => ({
  type: productActionTypes.FETCH_ONE_PRODUCT_START,
});

export const fetchOneProductFailed = (errMessage) => ({
  type: productActionTypes.FETCH_ONE_PRODUCT_FAILED,
  payload: errMessage,
});

export const fetchOneProductSuccess = (product) => ({
  type: productActionTypes.FETCH_ONE_PRODUCT_SUCCESS,
  payload: product,
});

export const fetchOneProductAsync = (params) => {
  return async (dispatch) => {
    try {
      dispatch(fetchOneProductStart());
      const singleProduct = await axios.get(
        `http://localhost:5000/api/products/${params.id}`
      );

      if (singleProduct) dispatch(fetchOneProductSuccess(singleProduct.data));
    } catch (err) {
      throw new Error(err.message);
    }
  };
};

export const sellerSetCurrentPage = (newPage) => ({
  type: productActionTypes.SELLER_SET_CURRENT_PAGE,
  payload: newPage,
});

export const sellerSetProductPerPage = (newPPP) => ({
  type: productActionTypes.SELLER_SET_PRODUCT_PER_PAGE,
  payload: newPPP,
});

export const sellerFetchProductStart = () => ({
  type: productActionTypes.SELLER_FETCH_PRODUCT_START,
});

export const sellerFetchProductFailed = (errMessage) => ({
  type: productActionTypes.SELLER_FETCH_PRODUCT_FAILED,
  payload: errMessage,
});

export const sellerFetchProductSuccess = (product) => ({
  type: productActionTypes.SELLER_FETCH_PRODUCT_SUCCESS,
  payload: product,
});

export const sellerFetchProductAsync = (currentPage, limit) => {
  return async (dispatch) => {
    dispatch(sellerFetchProductStart());
    try {
      const response = await axios.get(
        'http://localhost:5000/api/products/all',
        {
          params: {
            page: currentPage,
            limit: limit,
          },
        }
      );
      dispatch(sellerFetchProductSuccess(response.data));
    } catch (err) {
      dispatch(sellerFetchProductFailed(err.message));
    }
  };
};
export const sellerDeleteProductStart = () => ({
  type: productActionTypes.SELLER_DELETE_PRODUCT_START,
});
export const sellerDeleteProductFailed = (errMessage) => ({
  type: productActionTypes.SELLER_DELETE_PRODUCT_FAILED,
  payload: errMessage,
});
export const sellerDeleteProductSuccess = (product) => ({
  type: productActionTypes.SELLER_DELETE_PRODUCT_SUCCESS,
  payload: product,
});

export const sellerDeleteProductAsync = (productId) => {
  return async (dispatch) => {
    dispatch(sellerDeleteProductStart());
    try {
      const removedProduct = await axios.post(
        'http://localhost:5000/api/products/remove',
        {
          _id: productId,
        }
      );
      if (removedProduct)
        dispatch(sellerDeleteProductSuccess(removedProduct.data));
    } catch (error) {
      sellerDeleteProductFailed(error.message);
    }
  };
};
