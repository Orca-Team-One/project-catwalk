import React, { Component } from 'react'

export default class ComparisonItemsEntry extends Component {
  render() {
    return (
      <div class="comparison_card align_cards">
        {/* <img src="https://www.gstatic.com/webp/gallery3/2.png" alt="Denim Jeans" style="width:100%"></img> */}
        <p><a href="#">{this.props.comparedEntries.category}</a></p>
        <p>{this.props.comparedEntries.name}</p>
        <p class="card_price">${this.props.comparedEntries.default_price}</p>
        <p>Ratings</p>
        {/* <p><button>Add to Cart</button></p> */}
      </div>
    )
  }
}
