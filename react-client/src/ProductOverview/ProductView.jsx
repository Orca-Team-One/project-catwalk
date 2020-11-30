import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductImageView from './ProductImageView.jsx';
import ProductDetails from './ProductDetailsColumn.jsx';
import ProductDescription from './ProductDescription.jsx';

class ProductView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStyle: 0,
      selectedThumbnail: 0
    };

    this.changeStyle = this.changeStyle.bind(this);
    this.changeThumbnail = this.changeThumbnail.bind(this);
  }

  changeStyle(event, selectedStyleId) {
    this.setState({
      selectedStyle: selectedStyleId
    });
    event.preventDefault();
  }

  changeThumbnail(event, selectedThumbnailId) {
    this.setState({
      selectedThumbnail: selectedThumbnailId
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="product-view-container">
        { Object.keys(this.props.productData).length === 0 || this.props.productStyles.length === 0
          ? <p>Loading...</p>
          : <div>
              <Row>
                <Col sm={6}>
                  <ProductImageView
                    productStyles={this.props.productStyles}
                    selectedStyle={this.state.selectedStyle}
                    selectedThumbnail={this.state.selectedThumbnail}
                    changeThumbnail={this.changeThumbnail}/>
                </Col>
                <Col sm={4}>
                  <ProductDetails
                    productData={this.props.productData}
                    productStyles={this.props.productStyles}
                    productReviews={this.props.productReviews}
                    selectedStyle={this.state.selectedStyle}
                    changeStyle={this.changeStyle}/>
                </Col>
              </Row>
              <Row>
                <Col sm={4}></Col>
                <Col sm="auto">
                  <ProductDescription
                    productData={this.props.productData}/>
                </Col>
              </Row>
            </div>
        }
      </div>
    );
  }
}

export default ProductView;