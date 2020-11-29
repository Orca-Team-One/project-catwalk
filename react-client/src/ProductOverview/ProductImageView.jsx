import React from 'react';
import { Row, Col, Figure, FigureImage, Image} from 'react-bootstrap'
import ProductThumbnailsColumn from './ProductThumbnailsColumn.jsx';

function ProductImageView({ productStyles, selectedStyle, selectedThumbnail, changeThumbnail }) {

  return (
    <div className="productImageView">
      <Row>
        <Col sm={1}></Col>
        <Col sm={2}>
          <ProductThumbnailsColumn
            productStyles={productStyles}
            selectedStyle={selectedStyle}
            selectedThumbnail={selectedThumbnail}
            changeThumbnail={changeThumbnail}/>
        </Col>
        <Col sm={9}>
          <Figure className="currentImageView">
            <Image
              src={productStyles[selectedStyle].photos[selectedThumbnail].url}
              fluid/>
          </Figure>
        </Col>
      </Row>
    </div>
  );
}

export default ProductImageView;