import React, { Component } from 'react';
import ProductImageView from './ProductImageView.jsx';
import ProductDetailsColumn from './ProductDetailsColumn.jsx';
import ProductDescription from './ProductDescription.jsx';

function ProductView({ productID, productData, productStyles, currentStyle }) {
  return (
    <div className="productViewContainer">
      { Object.keys(productData).length === 0 || productStyles.length === 0 || Object.keys(currentStyle).length === 0
        ? <p>Loading...</p>
        : <div>
            <ProductImageView
              productID={productID}
              productStyles={productStyles}
              currentStyle={currentStyle}/>
            <ProductDetailsColumn
              productID={productID}
              productData={productData}
              productStyles={productStyles}
              currentStyle={currentStyle}/>
            <ProductDescription
              productData={productData}/>
          </div>
      }
    </div>
  );
}

export default ProductView;