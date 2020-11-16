import React, { Component } from 'react'
const ratings = ['One', 'Two', 'Three', 'Four', 'Five']

export class Breakdown_rating_list extends Component {
   
    render() {
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
}

export default Breakdown_rating_list
