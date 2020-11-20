import React, { Component } from 'react';
import ProductImageView from './ProductImageView.jsx';
import ProductDetailsColumn from './ProductDetailsColumn.jsx';
import ProductDescription from './ProductDescription.jsx';
// Test rendering with dummy data
import sampleProducts from './sampleData/sampleProducts.js';
import sampleDetails from './sampleData/sampleDetails.js';
import sampleInfo from './sampleData/sampleInfo.js';

function ProductView(props) {
  return (
    <div className="productViewContainer">
      <p>Product Overview</p>
      <ProductImageView details={sampleDetails}/>
      <ProductDetailsColumn product={sampleProducts[4]} details={sampleDetails}/>
      <ProductDescription product={props.productData} info={sampleInfo}/>
    </div>
  );
}

export default ProductView;