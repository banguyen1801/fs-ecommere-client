import axios from 'axios';

export default function setAuthorizationToken(token) {
  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  if (!token) delete axios.defaults.headers.common['Authorization'];
}
