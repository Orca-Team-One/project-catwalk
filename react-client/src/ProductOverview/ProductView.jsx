import React, { Component } from 'react';
import ProductImageView from './ProductImageView.jsx';
import ProductDetailsColumn from './ProductDetailsColumn.jsx';
import ProductDescription from './ProductDescription.jsx';
// Test rendering with dummy data
import sampleProducts from './sampleProducts.js';
import sampleDetails from './sampleDetails.js';
import sampleInfo from './sampleInfo.js';

class ProductView extends Component {
  render() {
    return (
      <div className="productViewContainer">
        <p>Product Overview</p>
        <ProductImageView details={sampleDetails}/>
        <ProductDetailsColumn product={sampleProducts[4]} details={sampleDetails}/>
        <ProductDescription product={sampleProducts[4]} info={sampleInfo}/>
      </div>
    );
  }
}

export default ProductView;