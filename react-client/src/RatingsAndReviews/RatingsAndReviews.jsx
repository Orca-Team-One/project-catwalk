import React, { Component } from 'react'
import Breakdown from './Breakdown.jsx'
import ReviewList from './ReviewList.jsx' 
import AddReview from './AddReview.jsx'
import productdata from './productdata.jsx'
import ProductBreakdown from './ProductBreakdown.jsx'
import ReviewsSorting from './ReviewsSorting.jsx'
import metadata from './metadata.jsx'
import { Rating } from '@material-ui/lab';


// pass prod data and metadata as props
// only use state for form data, dont pass state as props 
export class RatingsAndReviews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviewstoRender: 2,
            sortingPreference: 'Relevance',
            sortedReviews: []
        }
        this.updateReviewList = this.updateReviewList.bind(this);
        this.handleSortingChange = this.handleSortingChange.bind(this);
        this.sortPreferences= this.sortPreferences.bind(this)
    }

    componentDidMount() {
          this.sortPreferences()
    }

    handleSortingChange(e) {
        console.log('e.target.value', e.target.value)
         this.setState({sortingPreference: e.target.value}, () => {
             this.sortPreferences()
         })
    }

    sortPreferences() {
        var results;
        // add axios.then to handle sorting of relevance when API call comes in
        if (this.state.sortingPreference === 'Relevance') {
            // combined date and helfulness score

       } 
       if (this.state.sortingPreference === 'Helpfulness') {
        results = this.props.productReviews.results.sort((a, b) => {
            return b.helpfulness - a.helpfulness
        })

       } if (this.state.sortingPreference === 'Rating') {
        results = this.props.productReviews.results.sort((a, b) => {
            console.log('ratings', a.rating, b.rating)
            return b.rating - a.rating
        })
    
       }

       this.setState({sortedReviews: results})

    }


    updateReviewList() {
        if(this.state.reviewstoRender === this.props.productReviews.results.length) {
            return
        }
        this.setState({reviewstoRender: this.state.reviewstoRender + 2})
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
                <div class="row" style={{
                    backgroundColor:"#FEE91C",
                    paddingLeft:"100px"
                }}>
                Ratings {'&'} Reviews
                </div>
                    <div class="row">
                        <div class="col-2" style={{
                        backgroundColor: "#EBEBEB",
                        fontSize:"50px",
                        paddingLeft: "100px",
                        paddingTop: "0px"
                        }}>
                            <b>
                            {'3.5'}
                            </b>
                            </div>
                            <div class="col-2" style={{
                                paddingTop: "30px",
                                paddingLeft: "0px"
                            }}>
                             <Rating
                            name="simple-controlled"
                            size="small"
                            value={3.5}
                            defaultValue={0}
                            precision={0.25}
                            readOnly/>
                            </div>
                            <div class="col-8" style={{
                                fontSize: "11px",
                                backgroundColor: "#FE1C49",
                                paddingTop: "60px"
                            }}>
                        <ReviewsSorting handleSortingChange = {this.handleSortingChange} sortingPreference = {this.state.sortingPreference}/>
                        </div>
                            <div class="col-4" style={{
                                paddingLeft: "100px",
                                fontSize: "11px"
                            }}>
                            {`100% of reviews recommend this product`}
                            </div>
                        </div>
                    <div class="row">
                        <div class="col-4" style={{
                            backgroundColor: "#FBD603",
                            fontSize:"11px",
                        }}>
                <Breakdown productdata= {this.props.productReviews}/>
                <ProductBreakdown ratingdata= {this.props.reviewMetadata}/>
                </div>
                <div class="col-8" style={{
                            fontSize:"12px"
                        }}>
                <ReviewList updateReviewList = {this.updateReviewList} productdata={this.state.sortedReviews || this.props.productReviews.results} reviewstoRender={this.state.reviewstoRender}/>
                <AddReview/>
                </div>
                </div>
                </div>
            )
                    }
}

}
export default RatingsAndReviews



