import './productpage.styles.scss';
import React from 'react';

import { Dropdown, ListGroup } from 'react-bootstrap';
import ProductList from '../../components/product-list/product-list.component';

const ProductPage = () => {
  return (
    <div>
      <div className="bread-crump">breadCrump</div>
      <div className="product-page">
        <div className="sidebar">
          <ListGroup className="sidebar__categories">
            <ListGroup.Item className="header">Categories</ListGroup.Item>
            <ListGroup.Item className="link" action>
              All Dresses
            </ListGroup.Item>
            <ListGroup.Item className="link" action>
              Rompers / Jumpsuits
            </ListGroup.Item>
            <ListGroup.Item className="link" action>
              Casual dresses
            </ListGroup.Item>
            <ListGroup.Item className="link" action>
              Going out dresses
            </ListGroup.Item>
            <ListGroup.Item className="link" action>
              Party / Occasion dresses
            </ListGroup.Item>
            <ListGroup.Item className="link" action>
              Mini dresses
            </ListGroup.Item>
            <ListGroup.Item className="link" action>
              Maxi / Midi dresses
            </ListGroup.Item>
            <ListGroup.Item className="link" action>
              Sets
            </ListGroup.Item>
          </ListGroup>

          <ListGroup className="sidebar__filter">
            <ListGroup.Item className="header">Filter</ListGroup.Item>
            <Dropdown className="dropdown">
              <Dropdown.Toggle className="dropdown-button">
                Size
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item className="dropdown-item">S</Dropdown.Item>
                <Dropdown.Item className="dropdown-item">M</Dropdown.Item>
                <Dropdown.Item className="dropdown-item">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="dropdown">
              <Dropdown.Toggle className="dropdown-button">
                Color
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item className="dropdown-item">Red</Dropdown.Item>
                <Dropdown.Item className="dropdown-item">Blue</Dropdown.Item>
                <Dropdown.Item className="dropdown-item">Yellow</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="dropdown">
              <Dropdown.Toggle className="dropdown-button">
                Brand
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item className="dropdown-item">Zara</Dropdown.Item>
                <Dropdown.Item className="dropdown-item">Kana</Dropdown.Item>
                <Dropdown.Item className="dropdown-item">Mara</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="dropdown">
              <Dropdown.Toggle className="dropdown-button">
                Available
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item className="dropdown-item">On Site</Dropdown.Item>
                <Dropdown.Item className="dropdown-item">Online</Dropdown.Item>
                <Dropdown.Item className="dropdown-item">
                  On Site and Online
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ListGroup>
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default ProductPage;
