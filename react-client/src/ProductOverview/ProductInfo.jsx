import React from 'react';

function ProductInfo({ productData, productStyles, selectedStyle }) {

  return (
    <div>
      {/* Star Rating, Read all Reviews */}
      <p>* * * * * | <a href="#ratingsReviewsComponent">Read all # reviews</a></p>

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