import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Grid, FormControl, TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">
      <Row className="logo-text">
        <Col sm={8}>
          <h3>Logo | App Name</h3>
        </Col>
        <Col sm={2}>
          <TextField id="standard-basic" label="Search"/>
        </Col>
        <Col sm={2}>
          <IconButton>
            <SearchIcon className="search-icon" color="inherit" fontSize="medium"/>
          </IconButton>
        </Col>
      </Row>
      <p className="announcements"><em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> - SALE / DISCOUNT <b>OFFER</b> - NEW PRODUCT HIGHLIGHT</p>
    </div>
  );
}

export default Header;