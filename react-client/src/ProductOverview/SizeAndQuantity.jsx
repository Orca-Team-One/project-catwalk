import React from 'react';
// Testing React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Selectors({ productID, productStyles}) {
  let skuNums = Object.keys(productStyles[0].skus);
  let quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Row>
      {/* Size Selector */}
      <Col sm={3}>
        <label>Select size: </label>
        <select className="selector">
          { productStyles.length !== 0
            ? skuNums.map((num, index) =>
                <option key={index}>{productStyles[0].skus[`${num}`].size}</option>
              )
            : <p>Loading...</p>
          }
        </select>
      </Col>

      {/* Quantity Selector */}
      <Col>
        <label>Select quantity: </label>
        <select className="selector">
          {quantities.map((quantity) =>
            <option>{quantity}</option>
          )}
        </select>
      </Col>
    </Row>
  );
}

export default Selectors;