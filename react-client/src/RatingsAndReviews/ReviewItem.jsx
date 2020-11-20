import React, { Component } from 'react'
import RatingHelpfulness from './RatingHelpfulness.jsx'

// TODO flush out review item
const ReviewItem = ({review}) => {
        return (
            <>
                <div class="row">
                    <div class="col">
            {review.summary}
            </div>
            </div>
            <div class="row">
                <div class="col">
            {review.body}
            </div>
            </div>
            <div class="row">
                <div class="col" style= {{
                     borderBottom: "1px solid"
                }}>
                <RatingHelpfulness/>
                </div>  
                </div>
    </>
        )
}
export default ReviewItem
