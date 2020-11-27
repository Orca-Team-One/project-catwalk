import React, { Component } from 'react'
const ratings = ['One', 'Two', 'Three', 'Four', 'Five']
import LinearProgress from '@material-ui/core/LinearProgress'

const StarProgress = ({handleStarRatingClick, ratingTotal, rating, ratingdata}) => {
    const variantValue = () => {
        // see if rating is undefined in ratingdata.ratings
        // if yes, return 0
        if(ratingdata.ratings[rating] === undefined) {
            return 0
        }
            return ((ratingdata.ratings[rating])/ratingTotal) * 100
        // return value at that rating
    }
        return (
            <div>
                <button onClick = {() =>{
                    handleStarRatingClick(rating)
                }}  style = {{
                      background: "none",
                      border: "none",
                      display: "inlineblock",
                      transitionduration: "0.2s",
                      cursor: "pointer",
                      fontsize: "80%",
                      paddingleft: "5px",
                      paddingright: "5px",
                      textdecoration: "underline",
                }}>{`${rating} stars`} </button> <LinearProgress variant="determinate" value={variantValue()}/>
            </div>
        )
}
export default StarProgress;
