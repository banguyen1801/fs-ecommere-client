import './sign-up.styles.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-bootstrap/Modal';

import {
  showSignUpModal,
  hideSignUpModal,
} from '../../redux/modal/modal.actions';

import SignUpForm from '../sign-up-form/sign-up-form.component';
const SignUp = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.signUpModalShow);

  const handleClose = () => dispatch(hideSignUpModal());
  const handleShow = () => dispatch(showSignUpModal());

  return (
    <div className="sign-up">
      <div className="sign-up" onClick={handleShow}>
        Register
      </div>
      <Modal className="sign-up__modal" show={showModal} onHide={handleClose}>
        <Modal.Header className="sign-up__modal__header" closeButton>
          <Modal.Title
            style={{ fontWeight: 'bold' }}
            className="sign-up__modal__header__title"
          >
            Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm />
        </Modal.Body>
        <Modal.Footer className="sign-up__modal__footer">
          <span>Do you have an account?</span>
          <span className="link">Log In</span>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignUp;
