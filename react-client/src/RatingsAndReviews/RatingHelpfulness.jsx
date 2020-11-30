import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

class RatingHelpfulness extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ratingHelpfulness: 0
        }
        this.handleHelpfulnessClick = this.handleHelpfulnessClick.bind(this)
    }

handleHelpfulnessClick() {
    if (!this.state.ratingHelpfulness) {
    this.setState({ratingHelpfulness: this.props.reviewHelpfulness + 1})
    } else {
        return
    }
}

    render() {
        return (
            <div>
                <button style = {{
                    background: "none",
                    border: "none",
                    display: "inline-block",
                    transitionduration: "0.2s",
                    cursor: "pointer",
                    fontsize: "80%",
                    paddingleft: "5px",
                    paddingright: "5px"
                }} onClick={()=> {
                    this.handleHelpfulnessClick()
                }}>
                    Helpful? Yes ({this.state.ratingHelpfulness || this.props.reviewHelpfulness})
                </button>
                {' | '}
                <button style = {{
                      background: "none",
                      border: "none",
                      display: "inlineblock",
                      transitionduration: "0.2s",
                      cursor: "pointer",
                      fontsize: "80%",
                      paddingleft: "5px",
                      paddingright: "5px",
                      textdecoration: "underline",
                }}>
                    Report
                </button>
            </div>
        )
            }
}
export default RatingHelpfulness
