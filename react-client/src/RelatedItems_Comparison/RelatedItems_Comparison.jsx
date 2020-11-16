import React, { Component } from 'react'
import ComparisonItemsList from './ComparisonItemsList.jsx'
import RelatedItemsList from './RelatedItemsList.jsx'


export default class RelatedItems_Comparison extends Component {
  render() {
    return (
      <div>
        Hello from RelatedItems_Comparison
        <ComparisonItemsList/>
        <RelatedItemsList/>
      </div>
    )
  }
}
