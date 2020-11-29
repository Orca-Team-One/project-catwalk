import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Style from './Style.jsx';

function StyleSelector ({ productStyles, selectedStyle, changeStyle }) {
  return (
    <div className="style-selector">
      <div className="style-selected-text">
        <p>
          <b>STYLE  >  </b>{productStyles[selectedStyle].name.toUpperCase()}
        </p>
      </div>
      <Container>
        <Row>
          {productStyles.map((style, index) =>
            <Col
              lg={3} md={4} sm={4} xs={3}
              key={index}>
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