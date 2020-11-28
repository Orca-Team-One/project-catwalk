import React from 'react';
import { Row, Col, Figure, FigureImage} from 'react-bootstrap'
import ProductThumbnailsColumn from './ProductThumbnailsColumn.jsx';

function ProductImageView({ productStyles, selectedStyle, selectedThumbnail, changeThumbnail }) {

  return (
    <div className="productImageView">
      <Row>
        <Col sm={1}>
          <ProductThumbnailsColumn
            productStyles={productStyles}
            selectedStyle={selectedStyle}
            selectedThumbnail={selectedThumbnail}
            changeThumbnail={changeThumbnail}/>
        </Col>
        <Col sm={8}>
          <Figure className="currentImageView">
            <Figure.Image
              width={500}
              height={1100}
              src={productStyles[selectedStyle].photos[selectedThumbnail].url}/>
          </Figure>
        </Col>
      </Row>
    </div>
  );
}

export default ProductImageView;