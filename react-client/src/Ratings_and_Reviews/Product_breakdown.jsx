import React, { Component } from 'react'

 
export class Product_breakdown extends Component {
   
    render() {
        return (
            <div>
                This is the Product Breakdown
                Size: {this.props.ratingdata.characteristics.Size.value}
            </div>
        )
    }
}

export default Product_breakdown
