import React, { Component } from 'react'
import RatingHelpfulness from './RatingHelpfulness.jsx'

// TODO flush out review item
const ReviewItem = ({review}) => {
        return (
            <>
                <div class="row">
                    <div class="col">
                        <div class="col" style= {{
                            backgroundColor: "#FE1CFE"
                        }}>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
            {review.summary}
            </div>
            <div class="col" style= {{
            paddingLeft: "400px"
            }}>
                    {review.date}
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
