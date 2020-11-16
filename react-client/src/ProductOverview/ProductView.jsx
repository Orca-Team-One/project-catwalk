import React from 'react';
import ProductImageView from './ProductImageView.jsx';
import ProductDetailsColumn from './ProductDetailsColumn.jsx';
import ProductDescription from './ProductDescription.jsx';

function ProductView() {
  return (
    <div>
      <p>Product Overview</p>
      <ProductImageView />
      <ProductDetailsColumn />
      <ProductDescription />
    </div>
  );
}

export default ProductView;