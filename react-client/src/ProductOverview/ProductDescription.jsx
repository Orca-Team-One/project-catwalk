import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ProductDescription({ productData }) {
  return (
    <div className="product-description">
      <Row>
        <Col sm={1}></Col>
        <Col sm={6}>
          <p className="product-data-slogan"><b>{productData.slogan}</b></p>
          <p className="product-data-description">{productData.description}</p>
        </Col>
        <Col sm={4}>
          <p className="product-features-title"><b>Product Features</b></p>
          {productData.features.map((feature, index) => {
            return (
              <div key={index}>
                <p className="product-features-list">
                  <i className="fa fa-check"></i> {''} {feature.feature} | {feature.value}
                </p>
              </div>
            )
          })}
        </Col>
      </Row>
    </div>
  );
}

export default ProductDescription;