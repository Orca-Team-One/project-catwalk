import React, { Component } from 'react'
import Breakdown from './Breakdown.jsx'
import ReviewList from './ReviewList.jsx' 
import AddReview from './AddReview.jsx'
import productdata from './productdata.jsx'
import ProductBreakdown from './ProductBreakdown.jsx'
import metadata from './metadata.jsx'


// pass prod data and metadata as props
// only use state for form data, dont pass state as props 
export class RatingsAndReviews extends Component {

    constructor(props) {
        super(props)
        this.state = {
    
        }
    }
    render() {
        if(Object.keys(this.props.productReviews).length === 0  || Object.keys(this.props.reviewMetadata).length === 0) { 
            return (
                <div>
                    Loading
                </div>
            )
        } else {
            console.log('product reviews', this.props.productReviews)
            console.log('reviewMetadata', this.props.reviewMetadata)
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
                <Breakdown productdata= {this.props.productReviews}/>
                <ProductBreakdown ratingdata= {this.props.reviewMetadata}/>
                </div>
                <div class="col-4" style={{
                            backgroundColor: "#33FFF9",
                            fontSize:"12px"
                        }}>
                <ReviewList productdata= {this.props.productReviews}/>
                <AddReview/>
                </div>
                </div>
                </div>
            )
                    }
}

}
export default RatingsAndReviews



