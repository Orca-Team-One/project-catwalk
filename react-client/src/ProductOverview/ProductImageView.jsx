import React from 'react';
import { Figure, FigureImage} from 'react-bootstrap'
import ProductThumbnailsColumn from './ProductThumbnailsColumn.jsx';

function ProductImageView({ productID, productStyles, currentStyle }) {
  return (
    <div className="productImageView">
      <Figure className="currentImageView">
        <Figure.Image
          width={500}
          height={1100}
          src={currentStyle.photos[0].url} />
      </Figure>

      {/* Product Thumbnails */}
      <ProductThumbnailsColumn
        productStyles={productStyles}
        currentStyle={currentStyle}/>
    </div>
  );
}

export default ProductImageView;