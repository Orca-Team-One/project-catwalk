import { data } from 'jquery'
import React, { Component } from 'react'
import ReviewItem from './ReviewItem.jsx'
import ShowMoreReviews from './ShowMoreReviews.jsx'

const ReviewList = ({productdata}) => {
        return (
            <div>
                This is the review List:
                {productdata.results.map((review) => (
                    <ReviewItem review = {review}/>
                ))
            }
            {/* only show this component if more than 2 reviews...conditional rendering?*/}
            <ShowMoreReviews/>
            </div>
        )
}

export default ReviewList
