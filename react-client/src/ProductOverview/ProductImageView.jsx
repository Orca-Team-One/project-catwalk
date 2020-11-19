import React from 'react';
import ProductThumbnailsColumn from './ProductThumbnailsColumn.jsx';

function ProductImageView(props) {
  return (
    <div className="productImageView">
      <p>Product Image View:</p>
      {/* Default image is set at the first thumbnail */}
      <img className="currentImageView" src={props.details.results[0].photos[0].url}></img>

      <ProductThumbnailsColumn details={props.details}/>
    </div>
  );
}

export default ProductImageView;