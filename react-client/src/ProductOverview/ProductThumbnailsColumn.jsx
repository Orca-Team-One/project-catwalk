import React from 'react';
import ProductThumbnail from './ProductThumbnail.jsx';

function ProductThumbnailsColumn({ productStyles, selectedStyle, changeThumbnail }) {
  return (
    <div>
      {productStyles[selectedStyle].photos.map((photo, index) =>
        <ProductThumbnail
          photo={photo}
          key={index}
          index={index}
          changeThumbnail={changeThumbnail}/>
      )}
    </div>
  );
}

export default ProductThumbnailsColumn;