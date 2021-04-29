import modalActionTypes from './modal.types';

export const showSignInModal = () => ({
  type: modalActionTypes.SHOW_SIGN_IN_MODAL,
});

export const showSignUpModal = () => ({
  type: modalActionTypes.SHOW_SIGN_UP_MODAL,
});

export const hideSignInModal = () => ({
  type: modalActionTypes.HIDE_SIGN_IN_MODAL,
});

export const hideSignUpModal = () => ({
  type: modalActionTypes.HIDE_SIGN_UP_MODAL,
});
