import React, { Component } from 'react';
import ProductImageView from './ProductImageView.jsx';
import ProductDetailsColumn from './ProductDetailsColumn.jsx';
import ProductDescription from './ProductDescription.jsx';
// Test rendering with dummy data
import sampleProducts from './sampleData/sampleProducts.js';
import sampleDetails from './sampleData/sampleDetails.js';
import sampleInfo from './sampleData/sampleInfo.js';

function ProductView({ productID, productData, productStyles }) {
  return (
    <div className="productViewContainer">
      <ProductImageView
        productID={productID}
        productStyles={productStyles}/>
      <ProductDetailsColumn
        productID={productID}
        productData={productData}
        productStyles={productStyles}/>
      <ProductDescription
        productData={productData}/>
    </div>
  );
}

export default ProductView;