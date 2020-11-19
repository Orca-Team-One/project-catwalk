import React, { Component } from 'react'
import BreakdownRatingList from './BreakdownRatingList.jsx'



// needs average all ratings for product
//needs count of total reviews
// needs review recomendation yes's as a percentage of total recomedation yes/no's
const Breakdown = ({productdata}) =>  {
        return (
            <div>
                Review Breakdown
                Average Review Score: {/*compute average review score*/}
                There were {productdata.results.length} total reviews for this product
                {/*compute percentage of reviewers recomending product*/} Percentage of reviewers recomend this product
                <BreakdownRatingList/>
            </div>
        )
}
export default Breakdown
