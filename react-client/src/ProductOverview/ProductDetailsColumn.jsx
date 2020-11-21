import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import Selectors from './SizeAndQuantity.jsx';
import AddToCart from './AddToCart.jsx';

function ProductDetails({ productID, productData, productStyles, currentStyle }) {
  return (
    <div className="productDetailsColumn">
      <ProductInfo
        productID={productID}
        productData={productData}
        productStyles={productStyles}
        currentStyle={currentStyle}/>
      <StyleSelector
        productID={productID}
        productStyles={productStyles}
        currentStyle={currentStyle}/>
      <Selectors
        productID={productID}
        productStyles={productStyles}
        currentStyle={currentStyle}/>
      <AddToCart />
    </div>
  );
}

export default ProductDetails;