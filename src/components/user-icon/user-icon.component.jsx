import React from 'react';
import './user-icon.styles.scss';
import { Link } from 'react-router-dom';

const logOut = () => {
  sessionStorage.clear();
  window.location.reload();
};

const UserIcon = () => {
  return (
    <div class="user-icon-dropdown">
      <div class="dropbtn">User Icon</div>
      <div class="dropdown-content">
        <Link to="/">User Profile</Link>
        <Link to="/" onClick={() => logOut()}>
          Log out
        </Link>
      </div>
    </div>
  );
};

export default UserIcon;
