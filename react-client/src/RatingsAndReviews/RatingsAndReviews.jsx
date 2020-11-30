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
            sortingPreference: '',
            sortedReviews: [],
        }
        this.updateReviewList = this.updateReviewList.bind(this);
        this.handleSortingChange = this.handleSortingChange.bind(this);
        this.sortPreferences= this.sortPreferences.bind(this)
        this.handleStarRatingClick = this.handleStarRatingClick.bind(this);
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

    handleStarRatingClick(reviewRating) {
       this.setState({sortedReviews: this.props.productReviews.results.filter((review) => {
           return review.rating === reviewRating
        })})
    }
   

    sortPreferences() {
        
        var results;
        
    
        if (this.state.sortingPreference === 'Relevance') {
            // combined date and helpfulness score
            results = this.props.productReviews.results.sort((a,b) => {
                return (Date.parse(b.date) + b.helpfulness) - (Date.parse(a.date) + a.helpfulness)
               })
       } 
       if(this.state.sortingPreference === 'Newest') {
           results = this.props.productReviews.results.sort((a,b) => {
            return Date.parse(b.date) - Date.parse(a.date)
           })
            //results = this.props.productReviews.results.sort()
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
            <div id="ratingsReviewsComponent">
                <div class="row">
                Ratings {'&'} Reviews
                </div>
                    <div class="row">
                        <div class="col-1.5" style={{
                        fontSize:"50px",
                        paddingTop: "0px"
                        }}>
                            <b>
                                {'3.5'}
                            {/* {Math.floor(this.props.productReviews.results.reduce((a,b) => (
                                a.rating + b.rating)) / this.props.productReviews.results.length)} */}
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
                            // value={Object.values(this.props.reviewMetadata.ratings).reduce((a,b) => (
                            //     a + b)) / Object.values(this.props.reviewMetadata.ratings).length}
                            defaultValue={0}
                            precision={0.25}
                            readOnly/>
                            </div>
                            <div class="col-8" style={{
                                fontSize: "11px",
                                paddingTop: "60px"
                            }}>
                        <ReviewsSorting handleSortingChange = {this.handleSortingChange} sortingPreference = {this.state.sortingPreference}/>
                        </div>
                            <div class="col-4" style={{
                                fontSize: "11px"
                            }}>
                            {`100% of reviews recommend this product`}
                            </div>
                        </div>
                    <div class="row">
                        <div class="col-4" style={{
                            fontSize:"11px",
                        }}>
                <Breakdown handleStarRatingClick= {this.handleStarRatingClick} ratingdata= {this.props.reviewMetadata}/>
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



