import userActionTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const logOutAction = () => ({
  type: userActionTypes.LOG_OUT,
});

// export const setUserAsync = (user)=> {
//     return dispatch => {

//     }
// }
