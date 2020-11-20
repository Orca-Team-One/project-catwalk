import React from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Badge from '@material-ui/core/Badge';
// Testing React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StyleSelector (props) {
  return (
    <div>
      <h6>Style > {props.details.results[0].name}</h6>
      <Row>
        {props.details.results.map((result) =>
          <Col sm={2}>
            <Avatar src={result.photos[0].thumbnail_url} />
          </Col>
        )}
      </Row>
    </div>
  );
}

export default StyleSelector;