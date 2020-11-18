import React, { Component } from 'react'
import Rating_helpfulness from './Rating_helpfulness.jsx'

// TODO flush out review item
export class Review_item extends Component {
   
    render() {
        return (
            <div>
                {this.props.review.body}
                <Rating_helpfulness/>
            </div>
        )
    }
}

export default Review_item
