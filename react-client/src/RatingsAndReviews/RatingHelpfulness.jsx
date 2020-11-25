import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const RatingHelpfulness = ({review}) => {
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
                }}>
                    Helpful? Yes ({review.helpfulness})
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
export default RatingHelpfulness
