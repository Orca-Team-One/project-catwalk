import React, { Component } from 'react'
import StarProgress from './StarProgress.jsx'




// needs average all ratings for product
//needs count of total reviews
// needs review recomendation yes's as a percentage of total recomedation yes/no's
const Breakdown = ({ratingdata, handleStarRatingClick}) =>  {
    const ratings = [5, 4, 3, 2, 1]
    const ratingTotal = Object.values(ratingdata.ratings).reduce((a, b) => a + b)
        return (
            <div>
            {ratings.map((rating)=> (
                <StarProgress handleStarRatingClick={handleStarRatingClick} ratingTotal={ratingTotal} rating = {rating} ratingdata = {ratingdata}/>
            ))}
            </div>
        )
}
export default Breakdown
