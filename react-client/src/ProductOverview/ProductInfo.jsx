import React from 'react';

function ProductInfo({ productID, productData, productStyles }) {

  return (
    <div>
      {/* Star Rating, Read all Reviews */}
      <p>* * * * * | <a href="">Read all # reviews</a></p>

      {/* Product Category and Name */}
      { productData.category
        ? <div>
            <p>{productData.category.toUpperCase()}</p>
            <h5>{productData.name}</h5>
          </div>
        : <p>Loading...</p>
      }

      {/* Product Price, Sale Price */}
      { productStyles.length !== 0
        ? productStyles[0]["sale_price"] !== 0
          ? <div>
              <p style={{textDecoration: 'line-through'}}>${productStyles[0]["original_price"]}</p>
              <p>${productStyles[0]["sale_price"]}</p>
            </div>
          : <p>Original Price: ${productStyles[0]["original_price"]}</p>
        : <p>Loading...</p>
      }

      {/* <p>Social Media Links</p> */}

    </div>
  );
}

export default ProductInfo;