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
    return (
      <div>
        <ComparisonItemsList comparedItems = {this.state.ComparisonItems.dummyData}/>
        <RelatedItemsList relatedItems = {this.state.RelatedItems.dummyData}/>
      </div>
    )
  }
}
