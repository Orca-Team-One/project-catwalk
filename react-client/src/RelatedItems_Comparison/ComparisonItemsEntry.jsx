import React, { Component } from 'react'

export default class ComparisonItemsEntry extends Component {
  render() {
    return (
      <div class="comparison_card">
        {/* will need to add image here  */}
        <h1>Tailored Jeans</h1>
        <p class="card_price">$19.99</p>
        <p>Some text about the jeans</p>
        <p><button>Add to Cart</button></p>
      </div>
    )
  }
}
