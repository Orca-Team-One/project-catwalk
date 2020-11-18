import React, { Component } from 'react'
import ComparisonItemsEntry from './ComparisonItemsEntry.jsx'

// carousel code will be here using bootstrap 5


export default class ComparisonItemsList extends Component {
  render() {
    return (
      <div>
        {
          this.props.comparedItems.map((comparedEntry, index) => (
            <ComparisonItemsEntry key = {index} comparedEntries = {this.props.comparedItems[index]}/>
          ))
        }
      </div>
    )
  }
}
