import React, { Component } from 'react'
import Review_item from './Review_item.jsx'


export class Review_list extends Component {
   
    render() {
        return (
            <div>
                This is the review List
                <Review_item/>
            </div>
        )
    }
}

export default Review_list