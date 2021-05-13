import './user-icon.styles.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logOutAction } from '../../redux/user/user.actions';

const UserIcon = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    sessionStorage.clear();
    dispatch(logOutAction());
  };
  const userStore = useSelector((state) => state.user);
  const { name } = userStore.user;

  return (
    <div className="user-icon-dropdown">
      <div className="dropbtn">{name}</div>
      <div className="dropdown-content">
        <Link to="/customers">User Profile</Link>
        <Link to="/customers" onClick={() => logOut()}>
          Log out
        </Link>
      </div>
    </div>
  );
};

export default UserIcon;
