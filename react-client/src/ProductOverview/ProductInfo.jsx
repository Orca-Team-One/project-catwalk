import React from 'react';

function ProductInfo(props) {
  return (
    <div>
      {/* Star Rating, Read all Reviews
        ==> User can click on "Read all reviews" and is taken to Ratings and Reviews section
        ==> Check if there are ratings
            If there are no ratings, render empty stars
            If there are ratings, calculate the average for all ratings
            Render the average of stars filled in
      */}
      <p>Star Ratings</p>
      <p>Read all reviews</p>

      {/* Render the selected product's category */}
      <p>Product Category: {props.product.category}</p>

      {/* Render the selected product's name */}
      <p>Product Name: {props.product.name}</p>

      {/* Render the selected product's price
        ==> Check if there is a sale price from /styles
            If the sale price is 0, render the original price
            If the sale price is greater than 0,
              Render the original price with a strike-through,
              Render the sale price
      */}
      <p>Product Sale Price: ${props.details.results[0]["sale_price"]}</p>
      <p>Product Original Price: ${props.details.results[0]["original_price"]}</p>

      {/* <p>Social Media Links</p> */}
    </div>
  );
}

export default ProductInfo;