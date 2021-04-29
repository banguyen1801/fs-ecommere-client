import './sign-in.styles.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import SignInForm from '../sign-in-form/sign-in-form.component';

import {
  showSignInModal,
  hideSignInModal,
} from '../../redux/modal/modal.actions';

const SignIn = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.signInModalShow);

  const handleClose = () => dispatch(hideSignInModal());
  const handleShow = () => dispatch(showSignInModal());

  return (
    <div className="sign-in">
      <div className="sign-in__button" onClick={handleShow}>
        Login
      </div>
      <Modal className="sign-in__modal" show={showModal} onHide={handleClose}>
        <Modal.Header className="sign-in__modal__header" closeButton>
          <Modal.Title
            style={{ fontWeight: 'bold' }}
            className="sign-in__modal__header__title"
          >
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignInForm />
        </Modal.Body>
        <Modal.Footer className="sign-in__modal__footer">
          <span>Do you have an account?</span>
          <span className="link">Register</span>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignIn;
