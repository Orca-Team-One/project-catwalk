import React from 'react';
import ProductThumbnail from './ProductThumbnail.jsx';

function ProductThumbnailsColumn(props) {
  return (
    <div>
      <p>Product Image Thumbnails: </p>
      {props.details.results[0].photos.map((photo) => {
        return <ProductThumbnail photo={photo} />
      })}
    </div>
  );
}

export default ProductThumbnailsColumn;