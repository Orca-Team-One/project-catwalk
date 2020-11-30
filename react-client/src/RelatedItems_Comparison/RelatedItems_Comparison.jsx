import React, { Component } from 'react'
import ComparisonItemsList from './ComparisonItemsList.jsx'
import RelatedItemsList from './RelatedItemsList.jsx'
import axios from 'axios';

export default class RelatedItems_Comparison extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        <ComparisonItemsList
        productData={this.props.productData}
        currentProduct={this.props.currentProduct}
        />

        <RelatedItemsList
        getRelatedItems={this.props.getRelatedItems}
        relatedProducts={this.props.relatedProducts}
        currentProduct={this.props.currentProduct}
        getProduct={this.props.getProduct}
        grabAllProductData={this.props.grabAllProductData}
        />
      </div>
    )
  }
}
