import React, { Component } from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default class ComparisonItemsEntry extends Component {
  constructor(props){
    super(props);

  }



  render() {
    console.log('PHOTOS', this.props.outfitPhotoEntries)
    return (
      <Card style={{width: '9rem'}} ><a href="#" className="stretched-link"
      >
        <Card.Img varient = "top" src= {`${this.props.outfitPhotoEntries}`} alt="Denim Jeans"></Card.Img>
        <Card.Body>
        <Card.Title>{this.props.outfitEntries.name}</Card.Title>
        <Card.Text>{this.props.outfitEntries.category}</Card.Text>
        <p class="card_price">${this.props.outfitEntries.default_price}</p>
        <p>Ratings</p>
        </Card.Body>
        </a>
      </Card>
  )




  }
}
