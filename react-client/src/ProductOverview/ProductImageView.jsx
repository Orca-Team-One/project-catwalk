import React from 'react';
import { Row, Col, Figure, FigureImage} from 'react-bootstrap'
import ProductThumbnailsColumn from './ProductThumbnailsColumn.jsx';

function ProductImageView({ productID, productStyles, selectedStyle }) {
  return (
    <div className="productImageView">
      <Row>
        <Col sm={1}>
          <ProductThumbnailsColumn
            productStyles={productStyles}
            selectedStyle={selectedStyle}/>
        </Col>
        <Col sm={8}>
          <Figure className="currentImageView">
            <Figure.Image
              width={500}
              height={1100}
              src={productStyles[selectedStyle].photos[0].url} />
          </Figure>
        </Col>
      </Row>
    </div>
  );
}

export default ProductImageView;