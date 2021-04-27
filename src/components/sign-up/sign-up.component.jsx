import React, { useState } from 'react';

import './sign-up.styles.scss';

import Modal from 'react-bootstrap/Modal';

import SignUpForm from '../sign-up-form/sign-up-form.component';
const SignUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sign-up">
      <div className="sign-up" onClick={handleShow}>
        Register
      </div>
      <Modal className="sign-up__modal" show={show} onHide={handleClose}>
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
