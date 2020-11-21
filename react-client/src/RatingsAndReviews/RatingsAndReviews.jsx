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
            reviewstoRender: 2,
        }
        this.updateReviewList = this.updateReviewList.bind(this);
    }
    updateReviewList() {

        if(this.state.reviewstoRender === this.props.productReviews.results.length) {
            return
        }
        this.setState({reviewstoRender: this.state.reviewstoRender + 2})
            // if(this.state.currentReviewList.length === 0) {
            //     this.setState({currentReviewList: [this.props.productReviews.results[0], this.props.productReviews.results[1]]}, () => {
            //         console.log('currentReviewList', this.state.currentReviewList)
            //     })
            // } 
    }

    render() {
        if(Object.keys(this.props.productReviews).length === 0  || Object.keys(this.props.reviewMetadata).length === 0) { 
            return (
                <div>
                    Loading
                </div>
            )
        } else {
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
                <ReviewList updateReviewList = {this.updateReviewList} productdata={this.props.productReviews} reviewstoRender={this.state.reviewstoRender}/>
                <AddReview/>
                </div>
                </div>
                </div>
            )
                    }
}

}
export default RatingsAndReviews



