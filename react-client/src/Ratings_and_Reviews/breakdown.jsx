import React, { Component } from 'react'
import Breakdown_rating_list from './Breakdown_rating_list.jsx'

export class Breakdown extends Component {
    render() {
        return (
            <div>
                Review Breakdown
                <Breakdown_rating_list/>
            </div>
        )
    }
}

export default Breakdown
