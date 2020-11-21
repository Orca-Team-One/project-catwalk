import React from 'react';
import ProductThumbnail from './ProductThumbnail.jsx';

function ProductThumbnailsColumn({ productStyles }) {
  return (
    <div>
      <p>Product Image Thumbnails: </p>
      { productStyles.length !== 0
        ? <div>
            {productStyles[0].photos.map((photo, index) => {
              return <ProductThumbnail photo={photo} key={index}/>
            })}
          </div>
        : <p>Loading...</p>
      }
    </div>
  );
}

export default ProductThumbnailsColumn;