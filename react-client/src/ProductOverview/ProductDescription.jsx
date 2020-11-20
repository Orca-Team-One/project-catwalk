import React from 'react';
// Testing React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            : productData.features.map((feature) => {
              return (
                <div>
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