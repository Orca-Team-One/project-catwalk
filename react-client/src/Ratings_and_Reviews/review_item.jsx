import React, { Component } from 'react'

// TODO flush out review item
export class Review_item extends Component {
   
    render() {
        return (
            <div>
                {this.props.review.body}
            </div>
        )
    }
}

export default Review_item
