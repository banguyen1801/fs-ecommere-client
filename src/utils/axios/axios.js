import axios from 'axios';

const baseURL = process.env.REACT_APP_APP_URL;
console.log(`baseURL`, baseURL);

let headers = {};

if (sessionStorage.getItem('jwtToken')) {
  headers.Authorization = `Bearer ${JSON.parse(
    sessionStorage.getItem('jwtToken')
  )}`;
}
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

export default axiosInstance;
