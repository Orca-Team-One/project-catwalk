import React, { Component } from 'react'

const ProductBreakdown = ({ratingdata}) => {
        return (
            <div>
                This is the Product Breakdown
                Size: {ratingdata.characteristics.Size.value}
            </div>
        )
}
export default ProductBreakdown
