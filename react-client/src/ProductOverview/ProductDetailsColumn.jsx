import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import Selectors from './SizeAndQuantity.jsx';
import AddToCart from './AddToCart.jsx';

function ProductDetails({ productID, productData, productStyles }) {
  return (
    <div className="productDetailsColumn">
      <ProductInfo
        productID={productID}
        productData={productData}
        productStyles={productStyles} />
      <StyleSelector
        productID={productID}
        productStyles={productStyles}/>
      <Selectors
        productID={productID}
        productStyles={productStyles}/>
      <AddToCart />
    </div>
  );
}

export default ProductDetails;