import React, { Component } from 'react'
import RatingHelpfulness from './RatingHelpfulness.jsx'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

// TODO flush out review item
const ReviewItem = ({review}) => {
        return (
            <div class="reviewContainer">
            {review.summary}
            {review.body}
                <RatingHelpfulness/>  
            </div>
        )
}
export default ReviewItem
