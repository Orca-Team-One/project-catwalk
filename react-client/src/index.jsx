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
      productQuestions:  [],
      relatedProducts: [],
      productReviews:{},
      reviewMetadata:{},
      isRelatedItemsLoaded: false,
    }
    // bind functions here
    // this.getAllData = this.getAllData.bind(this)
    // this.getProductStyles = this.getProductStyles.bind(this)
    // this.getQuestions = this.getQuestions.bind(this)
    // this.getReviewData = this.getReviewData.bind(this)
    // this.getMetaData = this.getMetaData.bind(this)
    // this.getRelatedItems = this.getRelatedItems.bind(this)
  }

  componentDidMount() {
    // this.getAllData();
    let getProduct =
    `http://3.21.164.220/products/${this.state.productID}`;
    let getProductStyles =
    `http://3.21.164.220/products/${this.state.productID}/styles`;
    let getProductQuestions =
    `http://3.21.164.220/qa/questions?product_id=${this.state.productID}`;
    let getProductReviews =
    `http://3.21.164.220/reviews?product_id=${this.state.productID}`;
    let getMetaData =
    `http://3.21.164.220/reviews/meta?product_id=${this.state.productID}`;
    let getRelatedItems =
    `http://3.21.164.220/products/${this.state.productID}/related`;

    const requestOne = axios.get(getProduct);
    const requestTwo = axios.get(getProductStyles);
    const requestThree = axios.get(getProductQuestions);
    const requestFour = axios.get(getProductReviews);
    const requestFive = axios.get(getMetaData);
    const requestSix = axios.get(getRelatedItems);

    axios
      .all([requestOne, requestTwo, requestThree, requestFour, requestFive, requestSix])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responseThree = responses[2];
          const responseFour = responses[3];
          const responseFive = responses[4];
          const responseSix = responses[5];

          // use/access the results
          console.log('HELLO?' ,responseOne, responseTwo, responseThree, responseFour, responseFive, responseSix);
        })
      )
      .catch(errors => {
        // react on errors.
        console.error('Err', errors);
      });
  }

  // // get a single product
  // getAllData() {
  //   axios.get(`http://3.21.164.220/products/${this.state.productID}`)
  //     .then((results) => {
  //       this.setState({ productData: results.data});
  //       console.log('THE FIRST API CALL WAS SUCCESSFUL')
  //     })
  //     // .catch((err) => {
  //     //   console.log(`Error fetching data for current product: ${err}`)
  //     // })
  //     // get product styles for a given product
  //     .then(
  //     axios.get(`http://3.21.164.220/products/${this.state.productID}/styles`))
  //     .then((results) => {
  //       this.setState({
  //         productStyles: results.data
  //       });
  //     })
  //     // .catch((err) => {
  //     //   console.log(`Error fetching data for current product's styles: ${err}`)
  //     // })
  //     // get questions for a single product
  //     .then(
  //       axios.get(`http://3.21.164.220/qa/questions?product_id=${this.state.productID}`)
  //     )
  //     .then((data) => {
  //       console.log('question data received:', data)
  //       this.setState({
  //         productQuestions: data.results,
  //       })
  //     })
  //     // .catch(error => console.log('there was an error getting the questions:', error))
  // //get review data for given product
  //     .then(
  //       axios.get(`http://3.21.164.220/reviews?product_id=${this.state.productID}`)
  //     )
  //     .then((results) => {
  //         this.setState({/*do something*/})
  //     })
  //     // .catch((err) => {
  //     //     console.log(`Error fetching review data: ${err}`)
  //     // })
  // //get ratings metadata for a given product
  //     .then(
  //       axios.get(`http://3.21.164.220/reviews/meta?product_id=${this.state.productID}`)
  //     )
  //     .then((results) => {
  //         this.setState({/*do something*/})
  //     })
  //     // .catch((err) => {
  //     //     console.log(`Error fetching rating metadata: ${err}`)
  //     // })
  //     .then(
  //       axios.get(`http://3.21.164.220/products/${this.state.productID}/related`)
  //     )
  //   .then((relatedData) => {
  //     this.setState({
  //       relatedProducts: relatedData.data,
  //       isRelatedItemsLoaded: true
  //     });
  //   }).catch(error => {console.log('There was in error in getRelatedItems')})
  // }


  // load info for single product
  // getProduct() {
  // axios.get(`http://3.21.164.220/products/${this.state.productID}`)
  // .then((results) => {
  //   this.setState({ productData: results.data});
  // })
  // .catch((err) => {
  //   console.log(`Error fetching data for current product: ${err}`)
  // })
  // }

  render() {

    return (
      <div>
        <h1>Hello World</h1>
        <ProductView productData={this.state.productData} />
        {(this.state.productQuestions.length > 0) ?
        <QAComponent productQuestions={this.state.productQuestions}/> :
        <div>'Loading questions'</div>
      }
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
