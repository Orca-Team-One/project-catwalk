import React from 'react';
import ProductThumbnail from './ProductThumbnail.jsx';

function ProductThumbnailsColumn({ currentStyle }) {
  return (
    <div>
      {currentStyle.photos.map((photo, index) => {
        return <ProductThumbnail photo={photo} key={index}/>
      })}
    </div>
  );
}

export default ProductThumbnailsColumn;