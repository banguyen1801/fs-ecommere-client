import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import modalReducer from './modal/modal.reducer';
import productReducer from './product/product.reducer';
import cartReducer from './cart/cart.reducer';

// add cart to whitelist to persist redux state
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['product', 'cart', 'user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  product: productReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
