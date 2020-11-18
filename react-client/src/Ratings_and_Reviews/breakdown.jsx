import React, { Component } from 'react'
import Breakdown_rating_list from './Breakdown_rating_list.jsx'



// needs average all ratings for product
//needs count of total reviews
// needs review recomendation yes's as a percentage of total recomedation yes/no's
export class Breakdown extends Component {
    render() {
        return (
            <div>
                Review Breakdown
                Average Review Score: {/*compute average review score*/}
                There were {this.props.productdata.results.length} total reviews for this product
                {/*compute percentage of reviewers recomending product*/} Percentage of reviewers recomend this product
                <Breakdown_rating_list/>
            </div>
        )
    }
}

export default Breakdown
