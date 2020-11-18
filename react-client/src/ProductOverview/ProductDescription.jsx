import React from 'react';

function ProductDescription(props) {
  return (
    <div>
      <p>Product Slogan: {props.product.slogan}</p>
      <p>Product Description: {props.product.description}</p>
    </div>
  );
}

export default ProductDescription;