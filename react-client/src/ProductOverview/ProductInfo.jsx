import React from 'react';
import { Rating } from '@material-ui/lab';

function ProductInfo({ productData, productStyles, selectedStyle }) {

  return (
    <div>
      {/* Star Rating, Read all Reviews */}
      <div>
        <Rating
          name="simple-controlled"
          size="small"
          value={3}
          defaultValue={0}
          precision={0.25}
          readOnly/>
        <a href="#ratingsReviewsComponent">  Read all # reviews</a>
      </div>

      {/* Product Category and Name */}
      <p>{productData.category.toUpperCase()}</p>
      <h5>{productData.name}</h5>

      {/* Product Price, Sale Price */}
      { productStyles[selectedStyle].sale_price === '0'
        ? <p>${productStyles[selectedStyle].original_price}</p>
        : <div>
            <p style={{textDecoration: 'line-through'}}>${productStyles[selectedStyle].original_price}</p>
            <p style={{fontWeight: 'bold'}}>${productStyles[selectedStyle].sale_price}</p>
          </div>
      }

      {/* <p>Social Media Links</p> */}

    </div>
  );
}

export default ProductInfo;