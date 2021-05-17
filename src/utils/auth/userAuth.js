import axiosInstance from '../../utils/axios/axios';

import { setAuthToken } from './auth.utils';

// old bad version of login, not usable atm
export const login = async (email, password) => {
  let data, accessToken, user;
  try {
    const loginResponse = await axiosInstance.post('/api/login', {
      params: {
        email: email,
        password: password,
      },
    });
    data = loginResponse.data;
    accessToken = data.accessToken;
    user = data.user;
    setAuthToken(accessToken);
    window.location.reload();
  } catch (err) {
    throw err;
  }
  return { data, accessToken, user };
};

// delete Authentication header and clear sessionStorage
export const clearJwtTokenData = () => {
  setAuthToken('');
  sessionStorage.clear();
};
