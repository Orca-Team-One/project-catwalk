import { data } from 'jquery'
import React, { Component } from 'react'
import ReviewItem from './ReviewItem.jsx'
import ShowMoreReviews from './ShowMoreReviews.jsx'
import { Col } from 'react-bootstrap'

const ReviewList = ({productdata}) => {
        return (
            <div>
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
