import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import modalReducer from './modal/modal.reducer';

// add cart to whitelist to persist redux state
const persistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
};

const rootReducer = combineReducers({ user: userReducer, modal: modalReducer });

export default persistReducer(persistConfig, rootReducer);
