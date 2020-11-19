import React, { Component } from 'react'
const ratings = ['One', 'Two', 'Three', 'Four', 'Five']

const BreakdownRatingList = () => {
        return (
            <div>
                <ul>
                {ratings.map((rating => (
                    <li> {rating}</li>
                )))}
                </ul>
            </div>
        )
}
export default BreakdownRatingList;
