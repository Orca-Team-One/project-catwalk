import React, { Component } from 'react'
import Breakdown from './Breakdown.jsx'
import Review_list from './Review_list.jsx' 
import Add_review from './Add_review.jsx'
import sampledata from './sampledata.jsx'
import Product_breakdown from './Product_breakdown.jsx'


export class Ratings_and_reviews extends Component {
    render() {
        return (
            <div>
                <Breakdown data = {sampledata}/>
                <Product_breakdown/>
                <Review_list data = {sampledata}/>
                Insert Dropdown List for Review List
                <Add_review/>
            </div>
        )
    }
}
export default Ratings_and_reviews



