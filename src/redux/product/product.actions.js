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
        `http://localhost:5000/api/products/all`
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
  console.log('thunk', currentSort, currentPage, currentCategories);
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
      if (product) dispatch(fetchProductAdvancedSuccess(product.data));
    } catch (err) {
      dispatch(fetchAllProductFailed(err.message));
    }
  };
};
