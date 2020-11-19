import React, { Component } from 'react'
import RatingHelpfulness from './RatingHelpfulness.jsx'

// TODO flush out review item
const ReviewItem = ({review}) => {
        return (
            <div>
                {review.body}
                <RatingHelpfulness/>
            </div>
        )
}

export default ReviewItem
