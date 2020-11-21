import React, { Component } from 'react'

export default class RelatedItemsEntry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('LOOK AT THE ENTRY PROPS', this.props)
    return (
      <div class="card related_card alignComparedCards"><a href="#" class="stretched-link">
        <img src="https://picsum.photos/id/1025/200/300" alt="Denim Jeans" ></img>
        <p>{this.props.relatedEntries.name}</p>
        <p>{this.props.relatedEntries.category}</p>
        <p class="card_price">${this.props.relatedEntries.default_price}</p>
        <p>Ratings</p>
        {/* <p><button>Add to Cart</button></p> */}
        </a>
      </div>
    )
  }
}
