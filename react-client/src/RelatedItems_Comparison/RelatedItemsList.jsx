import React, { Component } from 'react'
import RelatedItemsEntry from './RelatedItemsEntry.jsx'
import axios from 'axios'



function RelatedItemsList(props) {
  if (props.relatedProducts.length > 0) {
    return (
      <div >
      {
        props.relatedProducts.map((product, index) => (
          <RelatedItemsEntry
          key = {index}
          productID = {props.relatedProducts[index]}
          handleRelatedItemClick={props.handleRelatedItemClick}
          />
        ))
        }
    </div>
    )
  } else {
    return(
      <div>
        Now loading....
      </div>
    )
  }
}

export default RelatedItemsList;