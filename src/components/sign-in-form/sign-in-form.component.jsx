import './sign-in-form.styles.scss';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';

import useSessionStorage from '../../utils/custom-hooks/useSessionStorage';
import setAuthorizationToken from '../../utils/auth/setAuthorizationToken';

import { setCurrentUser } from '../../redux/user/user.actions';
import {
  showSignInModal,
  hideSignInModal,
} from '../../redux/modal/modal.actions';

const SignInForm = () => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [jwtToken, setJwtToken] = useSessionStorage('jwtToken', '');
  // eslint-disable-next-line
  const [user, setUser] = useSessionStorage('user', {});

  const login = async () => {
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
      if (data) {
        dispatch(hideSignInModal());
      }
      setJwtToken(data.accessToken);
      setAuthorizationToken(data.accessToken);

      console.log('decoded jwtToken', jwt.decode(data.accessToken));
      setUser(jwt.decode(data.accessToken));
      dispatch(setCurrentUser(jwt.decode(data.accessToken)));

      console.log(data);
    } catch (err) {
      console.log(err);
      dispatch(showSignInModal());
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