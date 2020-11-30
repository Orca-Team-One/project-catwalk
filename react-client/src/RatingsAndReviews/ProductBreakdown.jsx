import React, { Component } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

const ProductBreakdown = ({ratingdata}) => {
        return (
                    <div style={{
                        paddingTop: "20px"
                    }}>

                        {Object.keys(ratingdata.characteristics).map((characteristic) => (
                                <div>
                                {characteristic}
                                <LinearProgress variant="determinate" value={ratingdata.characteristics[characteristic].value}/>
                                </div>
                        ))}
                    {/* <div>
                        Size
                <LinearProgress variant="determinate" value={ratingdata.characteristics.Size.value}/>
                </div>
                <div>
                    Width
                <LinearProgress variant="determinate" value={ratingdata.characteristics.Width.value}/>
                </div>
                <div>
                    Comfort
                <LinearProgress variant="determinate" value={ratingdata.characteristics.Comfort.value}/>
                </div>
                <div>
                    Quality
                <LinearProgress variant="determinate" value={ratingdata.characteristics.Quality.value}/>
                </div> */}
                </div>
        )
}
export default ProductBreakdown
