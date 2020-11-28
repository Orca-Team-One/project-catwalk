import React, { Component } from 'react'
import ComparisonItemsEntry from './ComparisonItemsEntry.jsx'
import { Card } from 'react-bootstrap';
import Slider from "react-slick";
// carousel code will be here using bootstrap 5


export default class ComparisonItemsList extends Component {
  render() {
    var settings = {
      slidesToShow: 4,
      slidesToScroll:3,
      dots:true,
    }
    return (
      <div>

        <Slider {...settings}>
          <Card> <a href="#" class="stretched-link">+ Add this item to your outfit! </a></Card>
          {
            this.props.comparedItems.map((comparedEntry, index) => (
              <ComparisonItemsEntry key = {index} comparedEntries = {this.props.comparedItems[index]}/>
            ))
          }
        </Slider>
      </div>
    )
  }
}
