import './sidebar.styles.scss';

import React from 'react';

import SideBarCategories from '../sidebar-categories/sidebar-categories.component';
import SideBarFilter from '../sidebar-filter/sidebar-filter.component';

const SideBar = () => {
  return (
    <div className="sidebar">
      <SideBarCategories />
      <SideBarFilter />
    </div>
  );
};

export default SideBar;
