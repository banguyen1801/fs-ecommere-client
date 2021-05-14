import productActionTypes from './product.types';
const initialState = {
  products: [],
  isLoading: true,
  errMessage: '',
  currentPage: 1,
  currentSort: 'Popularity',
  currentCategories: [],
  singleProduct: {},

  sellerTableProducts: [],
  sellerErrMessage: '',
  sellerCurrentPage: 1,
  sellerMaxPage: 1,
  sellerIsLoading: true,
  sellerProductPerPage: 10,
};

const productReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case productActionTypes.FETCH_ALL_PRODUCT_START:
    case productActionTypes.FETCH_PRODUCT_ADVANCE_START:
    case productActionTypes.FETCH_ONE_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
      };
    case productActionTypes.FETCH_ALL_PRODUCT_SUCCESS:
    case productActionTypes.FETCH_PRODUCT_ADVANCE_SUCCESS:
      return {
        ...state,
        products: action.payload.product,
        maxPage: action.payload.maxPage,
        isLoading: false,
      };
    case productActionTypes.FETCH_ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        singleProduct: action.payload,
        isLoading: false,
      };
    case productActionTypes.FETCH_ALL_PRODUCT_FAILED:
    case productActionTypes.FETCH_PRODUCT_ADVANCE_FAILED:
    case productActionTypes.FETCH_ONE_PRODUCT_FAILED:
      return {
        ...state,
        errMessage: action.payload,
      };
    case productActionTypes.SET_PRODUCT_CURRENT_SORT:
      return {
        ...state,
        currentSort: action.payload,
      };
    case productActionTypes.SET_PRODUCT_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case productActionTypes.SET_PRODUCT_CURRENT_CATEGORIES:
      return {
        ...state,
        currentCategories: [action.payload],
      };
    case productActionTypes.SELLER_FETCH_PRODUCT_START:
    case productActionTypes.SELLER_DELETE_PRODUCT_START:
      return {
        ...state,
        sellerIsLoading: true,
      };
    case productActionTypes.SELLER_FETCH_PRODUCT_FAILED:
    case productActionTypes.SELLER_DELETE_PRODUCT_FAILED:
      return {
        ...state,
        sellerErrMessage: action.payload,
      };
    case productActionTypes.SELLER_FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        sellerTableProducts: action.payload.product,
        sellerMaxPage: action.payload.maxPage,
        sellerIsLoading: false,
      };
    case productActionTypes.SELLER_SET_CURRENT_PAGE:
      return {
        ...state,
        sellerCurrentPage: action.payload,
      };
    case productActionTypes.SELLER_SET_PRODUCT_PER_PAGE:
      return {
        ...state,
        sellerProductPerPage: action.payload,
      };
    case productActionTypes.SELLER_DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        sellerTableProducts: state.sellerTableProducts.filter(
          (product) => product._id !== action.payload._id
        ),
        sellerIsLoading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
