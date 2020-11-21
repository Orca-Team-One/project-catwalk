import React from 'react';
import { Figure, FigureImage} from 'react-bootstrap'
import ProductThumbnailsColumn from './ProductThumbnailsColumn.jsx';

function ProductImageView({ productID, productStyles, selectedStyle }) {
  return (
    <div className="productImageView">
      <Figure className="currentImageView">
        <Figure.Image
          width={500}
          height={1100}
          src={productStyles[selectedStyle].photos[0].url} />
      </Figure>

      {/* Product Thumbnails */}
      <ProductThumbnailsColumn
        productStyles={productStyles}
        selectedStyle={selectedStyle}/>
    </div>
  );
}

export default ProductImageView;