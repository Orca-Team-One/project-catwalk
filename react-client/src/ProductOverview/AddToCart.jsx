import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button, IconButton } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function AddToCart({ favoriteClicked }) {
  return (
    <div className="shopping-cart-buttons">
      <Row>
        <Col sm={6}>
          <Button variant="contained">Add to Cart {'\u00A0\u00A0\u00A0\u00A0'} +</Button>
        </Col>
        <Col sm={3}>
          <Button variant="contained">Like </Button>
        </Col>
      </Row>
    </div>
  );
}

export default AddToCart;
