import React, { Component } from 'react'

export default class ComparisonItemsEntry extends Component {
  render() {
    return (
      <div class="container card comparison_card alignRelatedCards"><a href="#" class="stretched-link">
        <img src="https://picsum.photos/id/237/200/300" alt="Denim Jeans" ></img>
        <p><a href="#">{this.props.comparedEntries.name}</a></p>
        <p>{this.props.comparedEntries.category}</p>
        <p class="card_price">${this.props.comparedEntries.default_price}</p>
        <p>Ratings</p>
        </a>
      </div>
    )
  }
}
