import React, { Component } from 'react'

export default class ComparisonItemsEntry extends Component {

  render() {
    return (
      <div class="card comparison_card alignRelatedCards"><a href="#" class="stretched-link">
        <img src="https://picsum.photos/id/237/200/300" alt="Denim Jeans" ></img>
        <p>{this.props.comparedEntries.name}</p>
        <p>{this.props.comparedEntries.category}</p>
        <p class="card_price">${this.props.comparedEntries.default_price}</p>
        {/* will need to create seperate component to calculate ratings  */}
        <p>Ratings</p>
        </a>
      </div>
    )
  }
}
