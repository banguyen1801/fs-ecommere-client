import React from 'react';

import './sign-up-form.styles.scss';

const SignUpForm = () => (
  <div className="su-form">
    <div className="su-form__label">Name</div>
    <input type="text" className="su-form__input" placeholder="Name..." />
    <div className="su-form__label">E-mail</div>
    <input type="text" className="su-form__input" placeholder="Email..." />
    <div className="su-form__label">Password</div>
    <input type="text" className="su-form__input" placeholder="Password..." />
    <div className="su-form__terms">
      <div>By creating an account you agree to the</div>
      <span className="su-form__terms__link">Terms of Service</span>
      <span> and </span>
      <span className="su-form__terms__link">Privacy Policies</span>
    </div>
  </div>
);

export default SignUpForm;
