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
                    <div class="row">
                        <div class="col-3" style={{
                        backgroundColor: "#EBEBEB",
                        fontSize:"20px",
                        }}>
                        Ratings {'&'} Reviews
                        </div>
                        <div class = "col-4" style={{
                        backgroundColor: "#ABBAEA",
                        fontSize:"10px",
                        }}>
                        <label>248 reviews, sorted by:</label>
                        {/*set default to relevance by creating state for form */}
                            <select>
                                <option>Helpfulness</option>
                                <option>Newest</option>
                                <option>Relevance</option>
                            </select>
                        </div>
                        </div>
                    <div class="row">
                        <div class="col-3" style={{
                            backgroundColor: "#FBD603",
                            fontSize:"11px",
                        }}>
                <Breakdown ratingdata= {metadata} productdata= {productdata}/>
                <ProductBreakdown ratingdata= {metadata}/>
                </div>
                <div class="col-4" style={{
                            backgroundColor: "#33FFF9",
                            fontSize:"12px"
                        }}>
                <ReviewList productdata= {productdata}/>
                <AddReview/>
                </div>
                </div>
                </div>
        )
    }
}
export default RatingsAndReviews



