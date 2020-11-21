import React from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Badge from '@material-ui/core/Badge';
import { Container, Row, Col } from 'react-bootstrap';

function StyleSelector ({ productID, productStyles }) {
  return (
    <div>
      <h6>STYLE > {productStyles[0].name.toUpperCase()}</h6>
      <Row>
        {productStyles.map((result, index) =>
          <Col sm={2} key={index}>
            <Avatar src={result.photos[0].thumbnail_url} />
          </Col>
        )}
      </Row>
    </div>
  );
}

export default StyleSelector;