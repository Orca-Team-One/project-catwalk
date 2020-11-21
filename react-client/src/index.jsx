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
      productStyles: [],
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

    const getProductRequest = axios.get(getProduct);
    const getProductStylesRequest = axios.get(getProductStyles);
    const getProductQuestionsRequest = axios.get(getProductQuestions);
    const getProductReviewsRequest = axios.get(getProductReviews);
    const getMetaDataRequest = axios.get(getMetaData);
    const getRelatedItemsRequest = axios.get(getRelatedItems);

    axios
      .all([getProductRequest, getProductStylesRequest, getProductQuestionsRequest, getProductReviewsRequest, getMetaDataRequest, getRelatedItemsRequest])
      .then(
        axios.spread((...responses) => {
          const getProductResponse = responses[0];
          const getProductStylesReponse = responses[1];
          const getProductQuestionsResponse = responses[2]
          const getProductReviewsResponse = responses[3];
          const getMetaDataReponse = responses[4];
          const getReleatedItemsResponse = responses[5];

          // use/access the results
          console.log('ReponseData: ' ,getProductResponse, getProductStylesReponse, getProductQuestionsResponse, getProductReviewsResponse, getMetaDataReponse, getReleatedItemsResponse);

          // setState functions
          this.setState({
            productData: getProductResponse.data,
            productStyles: getProductStylesReponse.data.results,
            productQuestions: getProductQuestionsResponse.results,
            relatedProducts: getReleatedItemsResponse.data,
            productReviews: getProductReviewsResponse.data,
            reviewMetadata: getMetaDataReponse.data,
          })
        })
      )
      .catch(errors => {
        // react on errors.
        console.error('Err', errors);
      });
  }

  render() {

    return (
      <div>
        <h1>Hello World</h1>
        {/* <ProductView productData={this.state.productData} />
        <QAComponent productQuestions={this.state.productQuestions}/>
        <RatingsAndReviews/> */}
        <RatingsAndReviews 
        productReviews = {this.state.productReviews}
        reviewMetadata = {this.state.reviewMetadata}
        />
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
