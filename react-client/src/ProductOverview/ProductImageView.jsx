import React from 'react';
import { Row, Col, Figure, FigureImage, Image} from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
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
          <Carousel
            className="image-view-carousel"
            wrap={false}
            fade={false}
            slide={true}
            interval={null}
            activeIndex={selectedThumbnail}
            onClick={changeThumbnail}>
              {productStyles[selectedStyle].photos.map((photo, index) =>
                <Carousel.Item>
                  <Image
                    className="image-view-image"
                    key={index}
                    src={photo.url}
                    fluid/>
                </Carousel.Item>
              )}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}

export default ProductImageView;