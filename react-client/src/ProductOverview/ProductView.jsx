import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductImageView from './ProductImageView.jsx';
import ProductDetailsColumn from './ProductDetailsColumn.jsx';
import ProductDescription from './ProductDescription.jsx';

class ProductView extends Component {
  // props from App { productID, productData, productStyles}

  constructor(props) {
    super(props);

    this.state = {
      selectedStyle: 0
    };
  }

  render() {
    return (
      <div className="productViewContainer">
        { Object.keys(this.props.productData).length === 0 || this.props.productStyles.length === 0
          ? <p>Loading...</p>
          : <div>
              <Row>
                <Col sm={6}>
                  <ProductImageView
                    productID={this.props.productID}
                    productStyles={this.props.productStyles}
                    selectedStyle={this.state.selectedStyle}/>
                </Col>
                <Col sm={4}>
                  <ProductDetailsColumn
                    productID={this.props.productID}
                    productData={this.props.productData}
                    productStyles={this.props.productStyles}
                    selectedStyle={this.state.selectedStyle}/>
                </Col>
              </Row>
                <ProductDescription
                  productData={this.props.productData}/>
            </div>
        }
      </div>
    );
  }
}

export default ProductView;