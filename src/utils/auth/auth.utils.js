import axiosInstance from '../../utils/axios/axios';

export const setAuthToken = (token) => {
  axiosInstance.defaults.headers.common['Authorization'] = '';
  delete axiosInstance.defaults.headers.common['Authorization'];

  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log('default token setted', token);
  }
};
