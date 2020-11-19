import React, { Component } from 'react'
import Breakdown from './Breakdown.jsx'
import ReviewList from './ReviewList.jsx' 
import AddReview from './AddReview.jsx'
import productdata from './productdata.jsx'
import ProductBreakdown from './ProductBreakdown.jsx'
import metadata from './metadata.jsx'

export class RatingsAndReviews extends Component {
    render() {
        return (
            <div>
                <Breakdown ratingdata= {metadata} productdata= {productdata}/>
                <ProductBreakdown ratingdata= {metadata}/>
                <ReviewList productdata= {productdata}/>
                <AddReview/>
                Insert Dropdown List for Review
            </div>
        )
    }
}
export default RatingsAndReviews



