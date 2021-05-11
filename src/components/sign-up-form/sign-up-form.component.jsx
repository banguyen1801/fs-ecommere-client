import './sign-up-form.styles.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import axios from 'axios';

import { hideSignUpModal } from '../../redux/modal/modal.actions';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const signUp = async (username, email, password) => {
    try {
      const registerRespond = await axios.post(
        'http://localhost:5000/api/register',
        {
          params: {
            name: username,
            email: email,
            password: password,
          },
        }
      );
      const data = registerRespond.data;
      if (data) dispatch(hideSignUpModal());
    } catch (err) {
      throw new Error('register failed');
    }
  };

  return (
    <div className="su-form">
      <div className="su-form__label">Name</div>
      <input
        type="text"
        className="su-form__input"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Name..."
      />
      <div className="su-form__label">E-mail</div>
      <input
        type="text"
        className="su-form__input"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
      />
      <div className="su-form__label">Password</div>
      <input
        type="text"
        className="su-form__input"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password..."
      />
      <div className="su-form__terms">
        <div>By creating an account you agree to the</div>
        <span className="su-form__terms__link">Terms of Service</span>
        <span> and </span>
        <span className="su-form__terms__link">Privacy Policies</span>
      </div>
      <div className="su-form__button-field">
        <button
          className="su-form__register-button"
          onClick={() => signUp(username, email, password)}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
