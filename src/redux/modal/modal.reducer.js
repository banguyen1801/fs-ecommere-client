import modalActionTypes from './modal.types';

const initialState = {
  signInModalShow: false,
  signUpModalShow: false,
};

const modalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case modalActionTypes.SHOW_SIGN_IN_MODAL:
      return {
        ...state,
        signInModalShow: true,
      };
    case modalActionTypes.HIDE_SIGN_IN_MODAL:
      return {
        ...state,
        signInModalShow: false,
      };
    case modalActionTypes.SHOW_SIGN_UP_MODAL:
      return {
        ...state,
        signUpModalShow: true,
      };
    case modalActionTypes.HIDE_SIGN_UP_MODAL:
      return {
        ...state,
        signUpModalShow: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
