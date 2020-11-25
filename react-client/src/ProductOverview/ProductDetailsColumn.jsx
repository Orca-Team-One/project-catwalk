import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import Selectors from './SizeAndQuantity.jsx';
import AddToCart from './AddToCart.jsx';

function ProductDetails({ productData, productStyles, selectedStyle, changeStyle }) {
  return (
    <div className="productDetailsColumn">
      <ProductInfo
        productData={productData}
        productStyles={productStyles}
        selectedStyle={selectedStyle}/>
      <StyleSelector
        productStyles={productStyles}
        selectedStyle={selectedStyle}
        changeStyle={changeStyle}/><br></br>
      <Selectors
        productStyles={productStyles}
        selectedStyle={selectedStyle}/><br></br>
      <AddToCart />
    </div>
  );
}

export default ProductDetails;