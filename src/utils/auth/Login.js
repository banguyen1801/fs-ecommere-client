import axios from 'axios';

export default async function login(email, password) {
  let data, accessToken, user;
  try {
    const loginResponse = await axios.post('http://localhost:5000/api/login', {
      params: {
        email: email,
        password: password,
      },
    });
    data = loginResponse.data;
    accessToken = data.accessToken;
    user = data.user;
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    window.location.reload();
  } catch (err) {
    throw new Error('Logging failed');
  }
  return { data, accessToken, user };
}
