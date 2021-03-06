import axiosInstance from '../../utils/axios/axios';
import productActionTypes from './product.types';

export const fetchInitialProductStart = () => ({
  type: productActionTypes.FETCH_INITIAL_PRODUCT_START,
});

export const fetchInitialProductFailed = (errMessage) => ({
  type: productActionTypes.FETCH_INITIAL_PRODUCT_FAILED,
  payload: errMessage,
});

export const fetchInitialProductSuccess = (response) => ({
  type: productActionTypes.FETCH_INITIAL_PRODUCT_SUCCESS,
  payload: response,
});

export const fetchInitialProductAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchInitialProductStart());
      const response = await axiosInstance.get(`/api/products/initial`, {
        query: {
          page: 1,
          limit: 15,
        },
      });
      if (response) dispatch(fetchInitialProductSuccess(response.data));
    } catch (err) {
      dispatch(fetchInitialProductFailed(err.message));
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
      const product = await axiosInstance.get('/api/products/advanced', {
        params: {
          page: currentPage,
          categories: currentCategories,
          sort: currentSort,
        },
      });
      if (!product.length) dispatch(fetchProductAdvancedSuccess(product.data));
    } catch (err) {
      dispatch(fetchProductAdvancedFailed(err.message));
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
      const singleProduct = await axiosInstance.get(
        `/api/products/${params.id}`
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
      const response = await axiosInstance.get('/api/products/all', {
        params: {
          page: currentPage,
          limit: limit,
        },
      });
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
      const removedProduct = await axiosInstance.post('/api/products/remove', {
        _id: productId,
      });
      if (removedProduct)
        dispatch(sellerDeleteProductSuccess(removedProduct.data));
    } catch (error) {
      sellerDeleteProductFailed(error.message);
    }
  };
};
