import orderActionType from './order.types';
import axiosInstance from '../../utils/axios/axios';

export const fetchAllOrdersStart = () => ({
  type: orderActionType.FETCH_ALL_ORDERS_START,
});

export const fetchAllOrdersSuccess = (orders) => ({
  type: orderActionType.FETCH_ALL_ORDERS_SUCCESS,
  payload: orders,
});

export const fetchAllOrdersFailed = (errMessage) => ({
  type: orderActionType.FETCH_ALL_ORDERS_FAILED,
  payload: errMessage,
});

export const fetchAllOrdersAsync = (page) => {
  return async (dispatch) => {
    dispatch(fetchAllOrdersStart());
    try {
      const response = await axiosInstance.get(
        `/api/orders/advanced?page=${page}`
      );
      if (!response.length) dispatch(fetchAllOrdersSuccess(response.data));
    } catch (err) {
      dispatch(fetchAllOrdersFailed(err.message));
    }
  };
};

export const updateOrderStatusSuccess = (newOrder) => ({
  type: orderActionType.UPDATE_ORDER_STATUS_SUCCESS,
  payload: newOrder,
});

export const updateOrderStatusAsync = (id, newStatus) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post('/api/orders/modify', {
        params: {
          order_id: id,
          newData: {
            status: newStatus,
          },
        },
      });
      if (!response.data.error) {
        dispatch(updateOrderStatusSuccess(response.data));
      }
    } catch (err) {
      throw new Error('update order Status failed');
    }
  };
};

export const setCurrentPage = (page) => ({
  type: orderActionType.SET_CURRENT_PAGE,
  payload: page,
});
