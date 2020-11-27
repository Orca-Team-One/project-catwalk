import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Style from './Style.jsx';

function StyleSelector ({ productStyles, selectedStyle, changeStyle }) {
  return (
    <div>
      <h6><b>STYLE > </b>{productStyles[selectedStyle].name.toUpperCase()}</h6>
      <Container>
        <Row>
          {productStyles.map((style, index) =>
            <Col sm={2} key={index}>
              <Style
                style={style}
                index={index}
                changeStyle={changeStyle} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default StyleSelector;