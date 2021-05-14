import './sellerUserPanel.styles.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutAction } from '../../redux/user/user.actions';
import { setAuthToken } from '../../utils/auth/auth.utils';

const SellerUserPanel = () => {
  const userStore = useSelector((state) => state.user);
  const { name } = userStore.user;
  const dispatch = useDispatch();

  const logOut = () => {
    setAuthToken('');
    sessionStorage.clear();
    dispatch(logOutAction());
  };
  return (
    <div className="seller-user-panel">
      <div className="seller-user-panel__area">
        <div className="seller-user-panel__dropdown-icon">
          <span className="icon icon-user-circle"></span>
          <span className="seller-user-panel__dropdown-icon__user-name">
            {name}
          </span>
          <span className="icon icon-chevron-down"></span>
        </div>
        <div className="noti-area">
          <div className="noti-wrapper">
            <span className="icon icon-email"></span>
            <span className="noti-counter-email">0</span>
          </div>
          <div className="noti-wrapper">
            <span className="icon icon-bell"></span>
            <span className="noti-counter-bell">0</span>
          </div>
        </div>
      </div>
      <div className="seller-user-panel__dropdown-content">
        <Link to="/sellers">User Profile</Link>
        <Link to="/sellers" onClick={() => logOut()}>
          Log out
        </Link>
      </div>
    </div>
  );
};

export default SellerUserPanel;
