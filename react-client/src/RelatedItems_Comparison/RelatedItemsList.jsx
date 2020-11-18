import React, { Component } from 'react'
import RelatedItemsEntry from './RelatedItemsEntry.jsx'

export default class RelatedItemsList extends Component {


  render() {
    console.log(this.props.relatedItems);
    return (
      <div >
        {
          this.props.relatedItems.map((relatedEntry, index) => (
            <RelatedItemsEntry key = {index} relatedEntries = {this.props.relatedItems[index]}/>
          ))
        }
      </div>
    )
  }
}
