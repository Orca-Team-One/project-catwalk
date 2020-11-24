import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Selectors({ productStyles, selectedStyle }) {

  let skuNums = Object.keys(productStyles[selectedStyle].skus);
  let quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Container>
      <Row>
        {/* Size Selector */}
        <Col>
          <label>Select size: </label><br></br>
          <select className="selector">
            {skuNums.map((num, index) =>
              <option key={index}>{productStyles[selectedStyle].skus[`${num}`].size}</option>
            )}
          </select>
        </Col>

        {/* Quantity Selector */}
        <Col>
          <label>Select quantity: </label><br></br>
          <select className="selector">
            {quantities.map((quantity, index) => <option key={index}>{quantity}</option>)}
          </select>
        </Col>
      </Row>
    </Container>
  );
}

export default Selectors;