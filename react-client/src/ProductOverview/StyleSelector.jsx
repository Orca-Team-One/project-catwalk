import React from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Badge from '@material-ui/core/Badge';
import { Container, Row, Col } from 'react-bootstrap';

function StyleSelector ({ productID, productStyles, currentStyle }) {
  return (
    <div>
      <h6>STYLE > {currentStyle.name.toUpperCase()}</h6>
      <Container>
        <Row>
          {productStyles.map((result, index) =>
            <Col sm={2} key={index}>
              <Avatar src={result.photos[0].thumbnail_url} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default StyleSelector;