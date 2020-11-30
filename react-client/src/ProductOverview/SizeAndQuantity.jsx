import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import AddToCart from './AddToCart.jsx';

function Selectors({ productStyles, selectedStyle }) {

  let skuNums = Object.keys(productStyles[selectedStyle].skus);
  let quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="size-quantity-selectors">
      <Form>
        <Form.Group>
          <Form.Row>

            {/* Size Selector */}
            <Col sm={6}>
              <Form.Control as="select">
                <option>Select Size</option>
                {skuNums.map((num, index) =>
                  <option key={index}>{productStyles[selectedStyle].skus[`${num}`].size}</option>
                )}
              </Form.Control>
            </Col>

            {/* Quantity Selector */}
            <Col sm={5}>
              <Form.Control as="select">
                <option>Quantity</option>
                {quantities.map((quantity, index) => <option key={index}>{quantity}</option>)}
              </Form.Control>
            </Col>

          </Form.Row>
        </Form.Group>

        {/* Add to Cart Button */}
        <AddToCart />

      </Form>
    </div>
  );
}

export default Selectors;