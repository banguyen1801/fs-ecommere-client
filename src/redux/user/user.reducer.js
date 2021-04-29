import userActionTypes from './user.types';
const initialState = {
  isAuthenticated: false,
  user: {},
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case userActionTypes.LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
