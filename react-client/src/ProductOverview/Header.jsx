import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Grid, FormControl, TextField, InputAdornment, IconButton, Badge } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <Row className="logo-text">
          <Col>
            <h3><b><em> Logo | App Name </em></b></h3>
          </Col>
          <Col xs="auto">
            <TextField
              id="standard-basic"
              margin="dense"
              placeholder="Search"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}/>
          </Col>
          <Col xs="auto">
            <IconButton>
              <Badge badgeContent={0} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Col>
          <Col xs="auto"></Col>
        </Row>
      </div>

      {/* Site Announcements */}
      <div className="announcements">
        <p><em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> - SALE / DISCOUNT <b>OFFER</b> - NEW PRODUCT HIGHLIGHT</p>
      </div>
    </div>
  );
}

export default Header;