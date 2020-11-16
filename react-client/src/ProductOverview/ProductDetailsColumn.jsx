import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import Selectors from './SizeAndQuantity.jsx';
import AddToCart from './AddToCart.jsx';

function ProductDetails() {
  return (
    <div>
      <p>Product Details</p>
      <ProductInfo />
      <StyleSelector />
      <Selectors />
      <AddToCart />
    </div>
  );
}

export default ProductDetails;