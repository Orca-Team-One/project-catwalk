import React, { Component } from 'react'

export default class RelatedItemsEntry extends Component {
  render() {
    return (
      <div class="related_card">
        {/* <img src="https://www.gstatic.com/webp/gallery3/2.png" alt="Denim Jeans" style="width:100%"></img> */}
        <p>Category Name</p>
        <p>Product Description</p>
        <p class="card_price">$19.99</p>
        <p>Ratings</p>
        {/* <p><button>Add to Cart</button></p> */}
      </div>
    )
  }
}
