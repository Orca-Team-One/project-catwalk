import React, { Component } from 'react'

export default class RelatedItemsEntry extends Component {
  render() {
    console.log(this.props.relatedEntries);
    return (
      <div class="related_card align_cards">
        {/* <img src="https://www.gstatic.com/webp/gallery3/2.png" alt="Denim Jeans" style="width:100%"></img> */}
        <p><a href="#">{this.props.relatedEntries.category}</a></p>
        <p>{this.props.relatedEntries.name}</p>
        <p class="card_price">${this.props.relatedEntries.default_price}</p>
        <p>Ratings</p>
        {/* <p><button>Add to Cart</button></p> */}
      </div>
    )
  }
}
