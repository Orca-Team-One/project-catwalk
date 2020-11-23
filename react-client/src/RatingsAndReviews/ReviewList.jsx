import { data } from 'jquery'
import React, { Component } from 'react'
import ReviewItem from './ReviewItem.jsx'
import ShowMoreReviews from './ShowMoreReviews.jsx'
import { Col } from 'react-bootstrap'

const ReviewList = ({productdata, reviewstoRender, updateReviewList}) => {
// will always take in current review list
console.log('productdata', productdata)

if(productdata.length === 0) {
    return (
        <div>
        'No reviews for this product'
        </div>
    )
}
        return (
            <div>
                {productdata.slice(0, reviewstoRender).map((review) => (
                    <ReviewItem review = {review}/>
                ))
            }
            {/* only show this component if more than 2 reviews...conditional rendering?*/}
            <ShowMoreReviews updateReviewList = {updateReviewList} reviewstoRender = {reviewstoRender} productdata = {productdata}/>
            </div> 
        )
}

export default ReviewList
