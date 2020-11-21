import React from 'react';

function ProductInfo({ productID, productData, productStyles, currentStyle }) {

  return (
    <div>
      {/* Star Rating, Read all Reviews */}
      <p>* * * * * | <a href="#ratingsReviewsComponent">Read all # reviews</a></p>

      {/* Product Category and Name */}
      <p>{productData.category.toUpperCase()}</p>
      <h5>{productData.name}</h5>

      {/* Product Price, Sale Price */}
      { currentStyle.sale_price !== '0'
        ? <p>${currentStyle.original_price}</p>
        : <div>
            <p style={{textDecoration: 'line-through'}}>${currentStyle.original_price}</p>
            <p style={{fontWeight: 'bold'}}>${currentStyle.sale_price}</p>
          </div>
      }

      {/* <p>Social Media Links</p> */}

    </div>
  );
}

export default ProductInfo;