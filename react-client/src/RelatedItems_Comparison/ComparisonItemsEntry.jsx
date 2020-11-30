import React, { Component } from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default class ComparisonItemsEntry extends Component {
  constructor(props){
    super(props);

    this.state= {
      productImage: 'https://images-na.ssl-images-amazon.com/images/I/51WSi9ClhgL._AC_SL1303_.jpg'
    }
  }



  render() {
    return (
      <Card style={{width: '9rem'}} ><a href="#" className="stretched-link"
      >
        <Card.Img varient = "top" src= {`${this.state.productImage}`} alt="Denim Jeans"></Card.Img>
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
