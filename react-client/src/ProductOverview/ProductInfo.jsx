import React from 'react';

function ProductInfo({ productID, productData, productStyles }) {

  return (
    <div>
      {/* Star Rating, Read all Reviews */}
      <p>* * * * * | <a href="#ratingsReviewsComponent">Read all # reviews</a></p>

      {/* Product Category and Name */}
      { Object.keys(productData).length === 0 || productStyles.length === 0
        ? <p>Loading...</p>
        : <div>
            <p>{productData.category.toUpperCase()}</p>
            <h5>{productData.name}</h5>

            {/* Product Price, Sale Price */}
            { productStyles[0]["sale_price"] === '0'
              ? <p>Original Price: ${productStyles[0]["original_price"]}</p>
              : <div>
                  <p style={{textDecoration: 'line-through'}}>${productStyles[0]["original_price"]}</p>
                  <p>${productStyles[0]["sale_price"]}</p>
                </div>
            }
          </div>
      }

      {/* <p>Social Media Links</p> */}

    </div>
  );
}

export default ProductInfo;