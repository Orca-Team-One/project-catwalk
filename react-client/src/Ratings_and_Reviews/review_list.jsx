import { data } from 'jquery'
import React, { Component } from 'react'
import Review_item from './Review_item.jsx'
import Show_more_reviews from './Show_more_reviews.jsx'

export class Review_list extends Component {
   
    render() {
        return (
            <div>
                This is the review List:
                {this.props.productdata.results.map((review) => (
                    <Review_item review = {review}/>
                ))
            }
            {/* only show this component if more than 2 reviews...conditional rendering?*/}
            <Show_more_reviews/>
            </div>
        )
    }
}

export default Review_list
