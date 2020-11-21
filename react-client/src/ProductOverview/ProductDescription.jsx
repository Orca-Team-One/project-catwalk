import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ProductDescription({ productData }) {
  return (
    <Container className="productDescription">
      <Row>
        <Col lg={8}>
          <h5>{productData.slogan}</h5>
          <p>{productData.description}</p>
        </Col>
        <Col lg={4}>
          <h5>Product Features</h5>
          { !productData.features
            ? <p>Loading...</p>
            : productData.features.map((feature, index) => {
              return (
                <div key={index}>
                  <p>{feature.value} {feature.feature}</p>
                </div>
              )
            })
          }
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDescription;