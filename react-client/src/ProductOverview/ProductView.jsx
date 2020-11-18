import React, { Component } from 'react';
import ProductImageView from './ProductImageView.jsx';
import ProductDetailsColumn from './ProductDetailsColumn.jsx';
import ProductDescription from './ProductDescription.jsx';
// Test rendering with dummy data
import sampleProducts from './sampleProducts.js';
import sampleDetails from './sampleDetails.js';

class ProductView extends Component {
  render() {
    return (
      <div>
        <p>Product Overview</p>
        <ProductImageView details={sampleDetails}/>
        <ProductDetailsColumn product={sampleProducts[0]} details={sampleDetails}/>
        <ProductDescription product={sampleProducts[0]}/>
      </div>
    );
  }
}

export default ProductView;