import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ProductDescription({ productData }) {
  return (
    <div className="productDescription">
      <Row>
        <Col sm={8}>
          <h5>{productData.slogan}</h5>
          <p>{productData.description}</p>
        </Col>
        <Col sm={4}>
          <h5>Product Features</h5>
          {productData.features.map((feature, index) => {
            return (
              <div key={index}>
                <p>{feature.feature} | {feature.value}</p>
              </div>
            )
          })}
        </Col>
      </Row>
    </div>
  );
}

export default ProductDescription;