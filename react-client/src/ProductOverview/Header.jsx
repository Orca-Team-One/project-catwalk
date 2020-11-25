import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">
      <Row className="logo-text">
        <Col>
          <h1>Logo | App Name</h1>
        </Col>
        <Col>
          {/* <TextField id="standard-basic" label="Standard" /> */}
          <SearchIcon className="search-icon" color="inherit" fontSize="large"/>
        </Col>
      </Row>
      <p className="announcements"><em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> - SALE / DISCOUNT <b>OFFER</b> - NEW PRODUCT HIGHLIGHT</p>
    </div>
  );
}

export default Header;