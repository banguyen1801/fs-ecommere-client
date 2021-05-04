import './sidebar-categories.styles.scss';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ListGroup } from 'react-bootstrap';

import {
  setCurrentProductCategories,
  fetchProductAdvancedAsync,
} from '../../redux/product/product.actions';

const SideBarCategories = () => {
  const dispatch = useDispatch();
  const productStore = useSelector((state) => state.product);
  const isInitialMount = useRef(true);
  const { currentCategories, currentSort } = productStore;

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(
        fetchProductAdvancedAsync({
          currentCategories,
          currentSort,
        })
      );
    }
    // eslint-disable-next-line
  }, [currentCategories]);

  return (
    <ListGroup className="sidebar__categories">
      <ListGroup.Item className="header">Categories</ListGroup.Item>
      <ListGroup.Item
        action
        className="link"
        onClick={() => dispatch(setCurrentProductCategories('Clothes'))}
      >
        All Dresses
      </ListGroup.Item>
      <ListGroup.Item
        action
        className="link"
        onClick={() =>
          dispatch(setCurrentProductCategories('RompersJumpsuits'))
        }
      >
        Rompers / Jumpsuits
      </ListGroup.Item>
      <ListGroup.Item
        action
        className="link"
        onClick={() => dispatch(setCurrentProductCategories('CasualDresses'))}
      >
        Casual dresses
      </ListGroup.Item>
      <ListGroup.Item
        action
        className="link"
        onClick={() => dispatch(setCurrentProductCategories('GoingOutDresses'))}
      >
        Going out dresses
      </ListGroup.Item>
      <ListGroup.Item
        action
        className="link"
        onClick={() =>
          dispatch(setCurrentProductCategories('PartyOccasionDresses'))
        }
      >
        Party / Occasion dresses
      </ListGroup.Item>
      <ListGroup.Item
        action
        className="link"
        onClick={() => dispatch(setCurrentProductCategories('MiniDresses'))}
      >
        Mini dresses
      </ListGroup.Item>
      <ListGroup.Item
        action
        className="link"
        onClick={() => dispatch(setCurrentProductCategories('MaxiMidiDresses'))}
      >
        Maxi / Midi dresses
      </ListGroup.Item>
      <ListGroup.Item
        action
        className="link"
        onClick={() => dispatch(setCurrentProductCategories('Sets'))}
      >
        Sets
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SideBarCategories;
