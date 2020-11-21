import React from 'react';
import ProductThumbnail from './ProductThumbnail.jsx';

function ProductThumbnailsColumn({ productStyles, selectedStyle }) {
  return (
    <div>
      {productStyles[selectedStyle].photos.map((photo, index) => {
        return <ProductThumbnail photo={photo} key={index}/>
      })}
    </div>
  );
}

export default ProductThumbnailsColumn;