import React, { Component } from 'react';
import ProductImageView from './ProductImageView.jsx';
import ProductDetailsColumn from './ProductDetailsColumn.jsx';
import ProductDescription from './ProductDescription.jsx';

class ProductView extends Component {
  // props from App { productID, productData, productStyles, currentStyle }

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="productViewContainer">
        { Object.keys(this.props.productData).length === 0 || Object.keys(this.props.currentStyle).length === 0
          ? <p>Loading...</p>
          : <div>
              <ProductImageView
                productID={this.props.productID}
                productStyles={this.props.productStyles}
                currentStyle={this.props.currentStyle}/>
              <ProductDetailsColumn
                productID={this.props.productID}
                productData={this.props.productData}
                productStyles={this.props.productStyles}
                currentStyle={this.props.currentStyle}/>
              <ProductDescription
                productData={this.props.productData}/>
            </div>
        }
      </div>
    );
  }
}

export default ProductView;