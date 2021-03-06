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
                }}>
            {review.body}
            </div>
            </div>
            <div class="row">
                <div class="col" style= {{
                     borderBottom: "1px solid",
                }}>
                <RatingHelpfulness review={review} reviewHelpfulness = {review.helpfulness}/>
                </div>  
                </div>
    </>
        )
}
export default ReviewItem
