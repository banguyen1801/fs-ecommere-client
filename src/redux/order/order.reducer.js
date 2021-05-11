import orderActionType from './order.types';
const initialState = {
  ordersInfo: [],
  isLoading: true,
  errMessage: '',
  currentPage: 1,
  maxPage: 1,
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case orderActionType.FETCH_ALL_ORDERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case orderActionType.FETCH_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ordersInfo: action.payload.order,
        maxPage: action.payload.maxPage,
      };
    case orderActionType.FETCH_ALL_ORDERS_FAILED:
      return {
        ...state,
        isLoading: true,
        errMessage: action.payload,
      };
    case orderActionType.UPDATE_ORDER_STATUS_SUCCESS:
      const index = state.ordersInfo.findIndex(
        (order) => order._id === action.payload._id
      );

      return {
        ...state,
        ordersInfo: [
          ...state.ordersInfo.slice(0, index),
          action.payload,
          ...state.ordersInfo.slice(index + 1),
        ],
      };
    case orderActionType.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default OrderReducer;
