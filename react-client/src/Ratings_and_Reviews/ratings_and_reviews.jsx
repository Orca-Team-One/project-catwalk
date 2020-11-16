import React, { Component } from 'react'
import Breakdown from './Breakdown.jsx'
import Review_list from './Review_list.jsx' 
import Add_review from './Add_review.jsx'


export class Ratings_and_reviews extends Component {
    render() {
        return (
            <div>
                <Breakdown/>
                <Review_list/>
                <Add_review/>
            </div>
        )
    }
}
export default Ratings_and_reviews



