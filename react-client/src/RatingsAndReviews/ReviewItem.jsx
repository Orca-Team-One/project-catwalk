import React, { Component } from 'react'
import RatingHelpfulness from './RatingHelpfulness.jsx'
import { Rating } from '@material-ui/lab';
import Recommend from './Recommend.jsx'
import { ReceiptTwoTone } from '@material-ui/icons';

var dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat);
// TODO flush out review item
const ReviewItem = ({review}) => {
    const date = dayjs(review.date).format("MMMM D, YYYY");
        return (
            <>
                <div class="row">
                        <div class="col" style= {{
                            backgroundColor: "#FE1CFE",
                            paddingLeft: "0px"
                        }}>
                        <Rating
                            name="simple-controlled"
                            size="small"
                            value={review.rating}
                            defaultValue={0}
                            precision={0.25}
                            readOnly/>
                        </div>
            <div class="col" style= {{
            backgroundColor: "#FE751C",
            paddingLeft: "400px",
            fontSize: "9px",
            }}>
                    {`${review.reviewer_name}, ${date}`}
            </div>
            </div>
            <div class="row">
                <div class="col" style ={{
                    whitespace: "nowrap",
                    paddingLeft: "0px"
                }}>
                    <b>
                {review.summary}
                </b>
                </div>
            </div>
            {review.recommend === 1 ?
            <div class="row">
                <Recommend/>
            </div> : <> </>}
            <div class="row">
                <div class="col" style ={{
                    backgroundColor: "#BDFE1C"
                }}>
            {review.body}
            </div>
            </div>
            <div class="row">
                <div class="col" style= {{
                     borderBottom: "1px solid",
                     backgroundColor: "#FE3B1C"
                }}>
                <RatingHelpfulness review = {review}/>
                </div>  
                </div>
    </>
        )
}
export default ReviewItem
