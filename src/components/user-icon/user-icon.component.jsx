import './user-icon.styles.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logOutAction } from '../../redux/user/user.actions';

const UserIcon = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    sessionStorage.clear();
    dispatch(logOutAction());
  };

  return (
    <div className="user-icon-dropdown">
      <div className="dropbtn">User Icon</div>
      <div className="dropdown-content">
        <Link to="/">User Profile</Link>
        <Link to="/" onClick={() => logOut()}>
          Log out
        </Link>
      </div>
    </div>
  );
};

export default UserIcon;
