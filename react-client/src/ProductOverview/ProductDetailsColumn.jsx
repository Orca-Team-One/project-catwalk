import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import Selectors from './SizeAndQuantity.jsx';
import AddToCart from './AddToCart.jsx';

function ProductDetails(props) {
  return (
    <div>
      <p>Product Details</p>
      <ProductInfo product={props.product} details={props.details}/>
      <StyleSelector details={props.details}/>
      <Selectors details={props.details}/>
      <AddToCart />
    </div>
  );
}

export default ProductDetails;