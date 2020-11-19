import React, { Component } from 'react'
import ComparisonItemsList from './ComparisonItemsList.jsx'
import RelatedItemsList from './RelatedItemsList.jsx'
import dummyData from './dummyData.js'

export default class RelatedItems_Comparison extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RelatedItems: dummyData,
      ComparisonItems: dummyData
    }
  }
  render() {
    console.log('PRODUCT ID', this.props.currentProduct)
    return (
      <div>
        <ComparisonItemsList comparedItems = {this.state.ComparisonItems.dummyData}/>
        <RelatedItemsList relatedProducts={this.props.relatedProducts} currentProduct={this.props.currentProduct} getProduct={this.props.getProduct} relatedItems = {this.state.RelatedItems.dummyData}/>
      </div>
    )
  }
}
