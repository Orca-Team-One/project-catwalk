import React, { Component } from 'react'
import Breakdown from './Breakdown.jsx'
import Review_list from './Review_list.jsx' 
import Add_review from './Add_review.jsx'
import productdata from './productdata.jsx'
import Product_breakdown from './Product_breakdown.jsx'
import metadata from './metadata.jsx'

export class Ratings_and_reviews extends Component {
    render() {
        return (
            <div>
                <Breakdown ratingdata = {metadata} productdata = {productdata}/>
                <Product_breakdown ratingdata = {metadata}/>
                <Review_list productdata = {productdata}/>
                <Add_review/>
                Insert Dropdown List for Review
            </div>
        )
    }
}
export default Ratings_and_reviews



