import axios from 'axios';

export const setAuthToken = (token) => {
  axios.defaults.headers.common['Authorization'] = '';
  delete axios.defaults.headers.common['Authorization'];

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log('default token setted', token);
  }
};
