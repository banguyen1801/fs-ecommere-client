import React, { useState } from 'react';

import './sign-in-form.styles.scss';

const SignInForm = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="si-form">
      <div className="si-form__label">E-mail</div>
      <input type="text" className="si-form__input" placeholder="Email..." />
      <div className="si-form__label">Password</div>
      <input type="text" className="si-form__input" placeholder="Password..." />
      <div className="si-form__helpers">
        {checked ? (
          <span
            onClick={() => setChecked(!checked)}
            class="icon icon-checkbox-checked"
          ></span>
        ) : (
          <span
            onClick={() => setChecked(!checked)}
            class="icon icon-checkbox-unchecked"
          ></span>
        )}
        <span>Remember Password</span>
        <span className="si-form__helpers__forgot-password">
          Forgot Your Password?
        </span>
      </div>
      <div className="si-form__button-field">
        <button className="si-form__login-button">Login</button>
      </div>
    </div>
  );
};

export default SignInForm;
