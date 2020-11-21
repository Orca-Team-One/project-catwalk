import React, { Component } from 'react'
import axios from 'axios';

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
      console.log('photo URL', this.state.productImage)
    })
  }



  render() {
    return (
      <div class="card related_card alignComparedCards"><a href="#" class="stretched-link">
        <img src= {`${this.state.productImage}`} alt="Denim Jeans" ></img>
        <p>{this.state.productData.name}</p>
        <p>{this.state.productData.category}</p>
        <p class="card_price">${this.state.productData.default_price}</p>
        <p>Ratings</p>
        {/* <p><button>Add to Cart</button></p> */}
        </a>
      </div>
    )
  }
}
