import React, { Component } from 'react'

const ProductBreakdown = ({ratingdata}) => {
        return (
            <div>
                This is the Product Breakdown:
                Size: {ratingdata.characteristics.Size.value}
                Width:{ratingdata.characteristics.Width.value}
                Comfort:{ratingdata.characteristics.Comfort.value}
                Quality:{ratingdata.characteristics.Quality.value}

            </div>
        )
}
export default ProductBreakdown
