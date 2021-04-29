import './sidebar-filter.styles.scss';
import React from 'react';

import { Dropdown, ListGroup } from 'react-bootstrap';

const SideBarFilter = () => {
  return (
    <ListGroup className="sidebar__filter">
      <ListGroup.Item className="header">Filter</ListGroup.Item>
      <Dropdown className="dropdown">
        <Dropdown.Toggle className="dropdown-button">Size</Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item className="dropdown-item">S</Dropdown.Item>
          <Dropdown.Item className="dropdown-item">M</Dropdown.Item>
          <Dropdown.Item className="dropdown-item">L</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="dropdown">
        <Dropdown.Toggle className="dropdown-button">Color</Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item className="dropdown-item">Red</Dropdown.Item>
          <Dropdown.Item className="dropdown-item">Blue</Dropdown.Item>
          <Dropdown.Item className="dropdown-item">Yellow</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="dropdown">
        <Dropdown.Toggle className="dropdown-button">Brand</Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item className="dropdown-item">Zara</Dropdown.Item>
          <Dropdown.Item className="dropdown-item">Kana</Dropdown.Item>
          <Dropdown.Item className="dropdown-item">Mara</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="dropdown">
        <Dropdown.Toggle className="dropdown-button">Available</Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item className="dropdown-item">On Site</Dropdown.Item>
          <Dropdown.Item className="dropdown-item">Online</Dropdown.Item>
          <Dropdown.Item className="dropdown-item">
            On Site and Online
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ListGroup>
  );
};

export default SideBarFilter;
