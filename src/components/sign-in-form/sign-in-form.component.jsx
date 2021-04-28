import React, { useState } from 'react';
import useSessionStorage from '../../utils/custom-hooks/useSessionStorage';
import { Link } from 'react-router-dom';

import './sign-in-form.styles.scss';

import axios from 'axios';

const SignInForm = () => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line
  const [jwtToken, setJwtToken] = useSessionStorage('jwtToken', '');
  const [user, setUser] = useSessionStorage('user', {});

  const login = async () => {
    console.log(email, password);
    try {
      const loginResponse = await axios.post(
        'http://localhost:5000/api/login',
        {
          params: {
            email: email,
            password: password,
          },
        }
      );
      const data = loginResponse.data;
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${data.accessToken}`;
      setJwtToken(data.accessToken);
      setUser(data.user);
      console.log(data);
      console.log(user);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/api/products/advanced', {
  //       params: {
  //         page: 1,
  //         categories: ['PartyOccasionDresses', 'MiniDresses'],
  //         sort: 'highestprice',
  //       },
  //     })
  //     .then((res) => console.log(res.data))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="si-form">
      <div className="si-form__label">E-mail</div>
      <input
        type="text"
        className="si-form__input"
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="si-form__label">Password</div>
      <input
        type="text"
        className="si-form__input"
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="si-form__helpers">
        {checked ? (
          <span
            onClick={() => setChecked(!checked)}
            className="icon icon-checkbox-checked"
          ></span>
        ) : (
          <span
            onClick={() => setChecked(!checked)}
            className="icon icon-checkbox-unchecked"
          ></span>
        )}
        <span>Remember Password</span>
        <span className="si-form__helpers__forgot-password">
          Forgot Your Password?
        </span>
      </div>
      <div className="si-form__button-field">
        <Link to="/">
          <button className="si-form__login-button" onClick={() => login()}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
