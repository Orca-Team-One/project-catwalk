import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Style from './Style.jsx';

function StyleSelector ({ productID, productStyles, selectedStyle }) {
  return (
    <div>
      <h6>STYLE > {productStyles[selectedStyle].name.toUpperCase()}</h6>
      <Container>
        <Row>
          {productStyles.map((style, index) =>
            <Col sm={2} key={index}>
              <Style style={style} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default StyleSelector;