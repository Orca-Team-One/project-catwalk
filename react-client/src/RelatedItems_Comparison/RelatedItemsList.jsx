import React, { Component } from 'react'
import RelatedItemsEntry from './RelatedItemsEntry.jsx'
import axios from 'axios'
import { CardDeck } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';



function RelatedItemsList(props) {
  if (props.relatedProducts.length > 0) {
    return (
      <Carousel>
        <CardDeck >
        {
          props.relatedProducts.map((product, index) => (
            <RelatedItemsEntry
            key = {index}
            productID = {props.relatedProducts[index]}
            grabAllProductData={props.grabAllProductData}
            />
          ))
          }
      </CardDeck>
    </Carousel>
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