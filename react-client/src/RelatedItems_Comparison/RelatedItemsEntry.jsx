import React, { Component } from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default class RelatedItemsEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productData: {},
      productImage: ''
    };
  }

  componentDidMount() {
  // here you'll have your API calls to edit state.
    axios.get(`http://3.21.164.220/products/${this.props.productID}`).then((response) => {
      this.setState({
        productData: response.data
      })
    })

    axios.get(`http://3.21.164.220/products/${this.props.productID}/styles`).then((response) => {
      this.setState({
        productImage: response.data.results[0].photos[0].thumbnail_url
      })
    })
  }



  render() {
    if (this.props.grabAllProductData === undefined) {
      return (
      <div>
        now loading....
      </div>
      )} else {
    return (
        <Card style={{width: '8rem'}} onClick={ () => this.props.grabAllProductData(this.props.productID)}><a href="#" className="stretched-link"
        >
          <Card.Img varient = "top" src= {`${this.state.productImage}`} alt="Denim Jeans"></Card.Img>
          <Card.Body>
          <Card.Title>{this.state.productData.name}</Card.Title>
          <Card.Text>{this.state.productData.category}</Card.Text>
          <p class="card_price">${this.state.productData.default_price}</p>
          <p>Ratings</p>
          </Card.Body>
          </a>
        </Card>
    )}
  }
}
