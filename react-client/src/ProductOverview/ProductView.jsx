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
      selectedStyle: 0 // index of array of styles
    };

    // bind functions
    this.changeStyle = this.changeStyle.bind(this);
  }

  changeStyle(event, selectedStyleId) {
    this.setState({
      selectedStyle: selectedStyleId
    });
    event.preventDefault();
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
                    productStyles={this.props.productStyles}
                    selectedStyle={this.state.selectedStyle}/>
                </Col>
                <Col sm={4}>
                  <ProductDetailsColumn
                    productData={this.props.productData}
                    productStyles={this.props.productStyles}
                    selectedStyle={this.state.selectedStyle}
                    changeStyle={this.changeStyle}/>
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