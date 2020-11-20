import React, { Component } from 'react'
import Breakdown from './Breakdown.jsx'
import ReviewList from './ReviewList.jsx' 
import AddReview from './AddReview.jsx'
import productdata from './productdata.jsx'
import ProductBreakdown from './ProductBreakdown.jsx'
import metadata from './metadata.jsx'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

export class RatingsAndReviews extends Component {
    render() {
        return (
                <Container classname= "ratings_and_reviews_container">
                    <Row>
                        <Col>
                        Ratings {'&'} Reviews
                        </Col>
                        <Col>
                        <label>248 reviews, sorted by:</label>
                        {/*set default to relevance by creating state for form */}
                            <select>
                                <option>Helpfulness</option>
                                <option>Newest</option>
                                <option>Relevance</option>
                            </select>
                        </Col>
                    </Row>
                    <Row >
                    <Col classname = 'breakdowns'>
                <Breakdown ratingdata= {metadata} productdata= {productdata}/>
                <ProductBreakdown ratingdata= {metadata}/>
                </Col>
                <Col classname = "review_list">
                <ReviewList productdata= {productdata}/>
                </Col>
                </Row>
                <Row>
                    <Col>
                <AddReview/>
                </Col>
                </Row>
                </Container>
        )
    }
}
export default RatingsAndReviews



