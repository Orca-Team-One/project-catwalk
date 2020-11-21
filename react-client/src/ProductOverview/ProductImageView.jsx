import React from 'react';
import ProductThumbnailsColumn from './ProductThumbnailsColumn.jsx';

function ProductImageView({ productID, productStyles }) {
  return (
    <div className="productImageView">
      { productStyles.length !== 0
        ? <img className="currentImageView" src={productStyles[0].photos[0].url}></img>
        : <p>Loading...</p>
      }

      {/* Product Thumbnails */}
      <ProductThumbnailsColumn productStyles={productStyles}/>
    </div>
  );
}

export default ProductImageView;