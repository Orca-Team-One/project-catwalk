import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx'
import ProductView from './ProductOverview/ProductView.jsx';
import QAComponent from './QAComponents/QAComponent.jsx';
import RelatedItems_Comparison from './RelatedItems_Comparison/RelatedItems_Comparison.jsx';
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productID: 5,
      productData: {},
      productStyles: {},
      productQuestions: {},
      relatedProducts: [],
      productReviews:{},
      reviewMetadata:{},
      isRelatedItemsLoaded: false,
    }
    // bind functions here
    this.getProduct = this.getProduct.bind(this)
    this.getProductStyles = this.getProductStyles.bind(this)
    this.getQuestions = this.getQuestions.bind(this)
    this.getReviewData = this.getReviewData.bind(this)
    this.getMetaData = this.getMetaData.bind(this)
    this.getRelatedItems = this.getRelatedItems.bind(this)
  }

  componentDidMount() {
 // promise chain to call each API function
    this.getProduct()
    this.getProductStyles()
    this.getQuestions()
    this.getReviewData()
    this.getMetaData()
    this.getRelatedItems()
  }

  // get a single product
  getProduct() {
    axios.get(`http://3.21.164.220/products/${this.state.productID}`)
      .then((results) => {
        this.setState({ productData: results.data});
      })
      .catch((err) => {
        console.log(`Error fetching data for current product: ${err}`)
      })
  }

  // get product styles for a given product
  getProductStyles() {
    axios.get(`http://3.21.164.220/products/${this.state.productID}/styles`)
      .then((results) => {
        this.setState({
          productStyles: results.data
        });
      })
      .catch((err) => {
        console.log(`Error fetching data for current product's styles: ${err}`)
      })
  }

  // get questions for a single product
  getQuestions() {
    axios.get(`http://3.21.164.220/qa/questions/${this.state.productID}`)
      .then((data) => {
        this.setState({
          productQuestions: data.results,
        })
      })
      .catch(error => console.log('there was an error getting the questions:', error));
  }

  //get review data for given product
  getReviewData() {
    axios.get(`http://3.21.164.220/reviews?product_id=${this.state.productID}`)
      .then((results) => {
          this.setState({/*do something*/})
      }).catch((err) => {
          console.log(`Error fetching review data: ${err}`)
      })
  }

  //get ratings metadata for a given product
  getMetaData () {
    axios.get(`http://3.21.164.220/reviews/meta?product_id=${this.state.productID}`)
      .then((results) => {
          this.setState({/*do something*/})
      }).catch((err) => {
          console.log(`Error fetching rating metadata: ${err}`)
      })
  }

  getRelatedItems () {
    axios.get(`http://3.21.164.220/products/${this.state.productID}/related`)
    .then((relatedData) => {
      this.setState({
        relatedProducts: relatedData.data,
        isRelatedItemsLoaded: true
      });
    }).catch(error => {console.log('There was in error in getRelatedItems')})
}

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <ProductView productData={this.state.productData} />
        <QAComponent/>
        <RatingsAndReviews/>
        <RelatedItems_Comparison
        getRelatedItems={this.getRelatedItems}
        currentProduct={this.state.productID}
        getProduct={this.getProduct}
        relatedProducts={this.state.relatedProducts}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
