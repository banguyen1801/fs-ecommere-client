import './sidebar-categories.styles.scss';

import React from 'react';

import { ListGroup } from 'react-bootstrap';
const SideBarCategories = () => {
  return (
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
  );
};

export default SideBarCategories;
