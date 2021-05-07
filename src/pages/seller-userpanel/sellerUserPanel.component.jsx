import './sellerUserPanel.styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const SellerUserPanel = () => {
  return (
    <div className="seller-user-panel">
      <div className="seller-user-panel__area">
        <div className="seller-user-panel__dropdown-icon">
          <span className="icon icon-user-circle"></span>
          <span className="seller-user-panel__dropdown-icon__user-name">
            User Name
          </span>
          <span className="icon icon-chevron-down"></span>
        </div>
        <div className="noti-area">
          <div className="noti-wrapper">
            <span class="icon icon-email"></span>
            <span className="noti-counter-email">0</span>
          </div>
          <div className="noti-wrapper">
            <span class="icon icon-bell"></span>
            <span className="noti-counter-bell">0</span>
          </div>
        </div>
      </div>
      <div className="seller-user-panel__dropdown-content">
        <Link to="/sellers">User Profile</Link>
        <Link to="/sellers">Log out</Link>
      </div>
    </div>
  );
};

export default SellerUserPanel;
