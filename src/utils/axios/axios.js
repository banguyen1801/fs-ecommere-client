import axios from 'axios';

const baseURL = process.env.APP_URL;
console.log();

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
