import './sign-in-form.styles.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import useSessionStorage from '../../utils/custom-hooks/useSessionStorage';
import { setAuthToken } from '../../utils/auth/auth.utils';

import { setCurrentUser } from '../../redux/user/user.actions';
import {
  showSignInModal,
  hideSignInModal,
} from '../../redux/modal/modal.actions';

import axiosInstance from '../../utils/axios/axios';

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
      const loginResponse = await axiosInstance.post('/api/login', {
        params: {
          email: email,
          password: password,
        },
      });
      const data = loginResponse.data;
      if (data) {
        dispatch(hideSignInModal());
      }
      setJwtToken(data.accessToken);
      setAuthToken(data.accessToken);
      console.log('decoded jwtToken', jwt.decode(data.accessToken));
      setUser(jwt.decode(data.accessToken));
      dispatch(setCurrentUser(data.user));
      console.log(data);
    } catch (err) {
      console.log(err);
      dispatch(showSignInModal());
    }
  };

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
        <Link to="/customers">
          <button className="si-form__login-button" onClick={() => login()}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
