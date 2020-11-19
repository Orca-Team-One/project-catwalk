import React from 'react';
// Testing React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Selectors(props) {
  let skuNums = Object.keys(props.details.results[0].skus); // [1, 2, 3, 4, 5, 6]
  let quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Row>
      {/* Size Selector */}
      <Col sm={3}>
        <label>Select size: </label>
        <select className="selector">
          {skuNums.map((num) =>
            <option>{props.details.results[0].skus[`${num}`].size}</option>
          )}

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