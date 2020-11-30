import React, { Component } from 'react'
import ComparisonItemsEntry from './ComparisonItemsEntry.jsx'
import { Card } from 'react-bootstrap';
import Slider from "react-slick";
import axios from 'axios';
// carousel code will be here using bootstrap 5


export default class ComparisonItemsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      outfitArray: [],
      outfitPhotoArray: []
    }

    this.onAddClickHandler = this.onAddClickHandler.bind(this);
  }

  onAddClickHandler() {
    this.setState({
      outfitArray: this.state.outfitArray.concat(this.props.productData)
    })

    axios.get(`http://3.21.164.220/products/${this.props.currentProduct}/styles`).then((response) => {
      this.setState({
        outfitPhotoArray: this.state.outfitPhotoArray.concat(response.data.results[0].photos[0].thumbnail_url)
      })

    })

  }


  render() {
    var settings = {
      slidesToShow: 4,
      slidesToScroll:3,
      dots:true,
    }
    var styles = {
      card: {
        padding : '3rem'
      },
      cardImage: {
        objectFit: 'cover',
        height: '100%',
        width: '100%'
      }
    }
    if (this.state.outfitArray.length === 0) {
      return (

          <Card style={styles.card} onClick={() => this.onAddClickHandler()}>
            {/* <Card.Img style={styles.cardImage} varient = "top" src ="https://images-na.ssl-images-amazon.com/images/I/51WSi9ClhgL._AC_SL1303_.jpg" alt="default orca img">
            </Card.Img> */}
            <a href="#" class="stretched-link">
              + Add this item to your outfit!
            </a>
          </Card>

      )
    } else {
    return (
      <div>
        <Slider {...settings}>
          <Card onClick={() => this.onAddClickHandler()}> <a href="#" class="stretched-link">+ Add this item to your outfit! </a></Card>
          {
            this.state.outfitArray.map((outfitItem, index) => (
              <ComparisonItemsEntry key = {index} outfitEntries = {this.state.outfitArray[index]}
              outfitPhotoEntries = {this.state.outfitPhotoArray[index]}/>
            ))
          }
        </Slider>
      </div>
    )
    }
  }
}
