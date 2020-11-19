import React from 'react';
// Testing React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductDescription({ product, info }) {
  return (
    <Container className="productDescription">
      <Row>
        <Col lg={8}>
          <h5>{product.slogan}</h5>
          <p>{product.description}</p>
        </Col>
        <Col lg={4}>
          <h5>Product Features </h5>
          {info.features.map((feature) =>
            <p>{feature.value} {feature.feature}</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDescription;