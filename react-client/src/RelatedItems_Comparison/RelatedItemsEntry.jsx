import React, { Component } from 'react'

export default class RelatedItemsEntry extends Component {
  render() {
    console.log(this.props.relatedEntries);
    return (
      <div class="related_card align_cards">
        <img src="https://picsum.photos/id/1025/200/300" alt="Denim Jeans" ></img>
        <p><a href="#">{this.props.relatedEntries.name}</a></p>
        <p>{this.props.relatedEntries.category}</p>
        <p class="card_price">${this.props.relatedEntries.default_price}</p>
        <p>Ratings</p>
        {/* <p><button>Add to Cart</button></p> */}
      </div>
    )
  }
}
