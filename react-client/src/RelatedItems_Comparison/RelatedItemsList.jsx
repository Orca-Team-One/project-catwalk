import React, { Component } from 'react'
import RelatedItemsEntry from './RelatedItemsEntry.jsx'
import axios from 'axios'
import { CardDeck } from 'react-bootstrap';
import Slider from "react-slick";


function RelatedItemsList(props) {
  var settings = {
    slidesToShow: 4,
    slidesToScroll:3,
    dots:true,

  }
  if (props.relatedProducts.length > 0) {
    return (
      <div>
        <h1>Related Items..</h1>
        <Slider {...settings}>
          {
            props.relatedProducts.map((product, index) => (
              <RelatedItemsEntry
              key = {index}
              productID = {props.relatedProducts[index]}
              grabAllProductData={props.grabAllProductData}
              />
            ))
            }

      </Slider>
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