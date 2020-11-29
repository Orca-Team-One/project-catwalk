import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Rating } from '@material-ui/lab';
import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';

function ProductInfo({ productData, productStyles, productReviews, selectedStyle }) {

  /* Calculate Ratings/Reviews

  if (productReviews.results.length !== 0) {
    let reviews = productReviews.results;
    let sum = 0;

    for (let i = 0; i < reviews.length; i++) {
      sum += reviews[i].rating;
    };

    let average = sum / reviews.length;
  }

  */

  return (
    <div>
      {/* Star Rating, Read all Reviews */}
      <div>
        { productReviews.results.length !== 0
          ? <div className="ratings-reviews">
            <Row>
              <Col xs={3}>
              <Rating
                name="simple-controlled"
                size="small"
                value={3.33}
                defaultValue={0}
                precision={0.25}
                readOnly/>
              </Col>
              <Col xs="auto">
              <a href="#ratings-reviews">Read all {productReviews.results.length} reviews</a>
              </Col>
            </Row>
            </div>
          : <p>Loading...</p>

        }
      </div>

      {/* Product Category and Name */}
      <p>{productData.category.toUpperCase()}</p>
      <h5><b>{productData.name}</b></h5>
      <br></br>

      {/* Product Price, Sale Price */}
      { productStyles[selectedStyle].sale_price === '0'
        ? <p>${productStyles[selectedStyle].original_price}</p>
        : <div>
            <p style={{textDecoration: 'line-through'}}>${productStyles[selectedStyle].original_price}</p>
            <p style={{fontWeight: 'bold', color: 'red'}}>${productStyles[selectedStyle].sale_price}</p>
          </div>
      }

      {/* <p>Social Media Links</p> */}
      <Row>
        <Col xs={2}>
          <Button>
            <FacebookIcon color="primary"/>
          </Button>
        </Col>
        <Col xs={2}>
          <Button>
            <TwitterIcon color="primary"/>
          </Button>
        </Col>
        <Col xs="auto">
          <Button>
            <PinterestIcon color="secondary"/>
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ProductInfo;