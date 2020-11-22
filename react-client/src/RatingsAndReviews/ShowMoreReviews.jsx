import React, { Component } from 'react'

const ShowMoreReviews = ({updateReviewList, reviewstoRender, productdata}) => {

    if(productdata.length < 2 || productdata.length === reviewstoRender - 1) {
        return (
        <div>
           All reviews for this product are displayed
        </div>   
        )
    }
        return (
            <div>
                <button type="button" onClick={()=> {
                    updateReviewList()
                }}>Show More Reviews</button>
            </div>
        )
}

export default ShowMoreReviews
