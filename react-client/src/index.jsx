import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './ProductOverview/Header.jsx';
import ProductView from './ProductOverview/ProductView.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import QAComponent from './QAComponents/QAComponent.jsx';
import RelatedItems_Comparison from './RelatedItems_Comparison/RelatedItems_Comparison.jsx';
import axios from 'axios';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			productID: 5,
			productData: {},
			productStyles: [],
			productQuestions: [],
			relatedProducts: [],
			productReviews: {},
			reviewMetadata: {},
			isRelatedItemsLoaded: false,
		};
		// bind functions here
		// this.getAllData = this.getAllData.bind(this)
		// this.getProductStyles = this.getProductStyles.bind(this)
		// this.getQuestions = this.getQuestions.bind(this)
		// this.getReviewData = this.getReviewData.bind(this)
		// this.getMetaData = this.getMetaData.bind(this)
    // this.getRelatedItems = this.getRelatedItems.bind(this)
    this.grabAllProductData = this.grabAllProductData.bind(this);
	}

	componentDidMount() {
		// this.getAllData();
    this.grabAllProductData(this.state.productID);
  }

  grabAllProductData(ID) {

		let getProduct = `http://3.21.164.220/products/${ID}`;
		let getProductStyles = `http://3.21.164.220/products/${ID}/styles`;
		let getProductQuestions = `http://3.21.164.220/qa/questions?product_id=${ID}`;
		let getProductReviews = `http://3.21.164.220/reviews?product_id=${ID}`;
		let getMetaData = `http://3.21.164.220/reviews/meta?product_id=${ID}`;
		let getRelatedItems = `http://3.21.164.220/products/${ID}/related`;

		const getProductRequest = axios.get(getProduct);
		const getProductStylesRequest = axios.get(getProductStyles);
		const getProductQuestionsRequest = axios.get(getProductQuestions);
		const getProductReviewsRequest = axios.get(getProductReviews);
		const getMetaDataRequest = axios.get(getMetaData);
		const getRelatedItemsRequest = axios.get(getRelatedItems);

		axios
			.all([
				getProductRequest,
				getProductStylesRequest,
				getProductQuestionsRequest,
				getProductReviewsRequest,
				getMetaDataRequest,
				getRelatedItemsRequest,
			])
			.then(
				axios.spread((...responses) => {
					const getProductResponse = responses[0];
					const getProductStylesReponse = responses[1];
					const getProductQuestionsResponse = responses[2];
					const getProductReviewsResponse = responses[3];
					const getMetaDataReponse = responses[4];
					const getReleatedItemsResponse = responses[5];

					// use/access the results
					console.log(
						'ReponseData: ',
						getProductResponse,
						getProductStylesReponse,
						getProductQuestionsResponse,
						getProductReviewsResponse,
						getMetaDataReponse,
						getReleatedItemsResponse
					);
					// setState functions
					this.setState({
						productData: getProductResponse.data,
						productStyles: getProductStylesReponse.data.results,
						productQuestions: getProductQuestionsResponse.data.results,
						relatedProducts: getReleatedItemsResponse.data,
						productReviews: getProductReviewsResponse.data,
						reviewMetadata: getMetaDataReponse.data,
					});
				})
			);
  }

  
  render() {
    return (
      <div>
        <Header />
		<div className="masterContainer">
        <ProductView
          productID={this.state.productID}
          productData={this.state.productData}
          productStyles={this.state.productStyles}
					productReviews={this.state.productReviews}/>
        <RelatedItems_Comparison
          currentProduct={this.state.productID}
          getProduct={this.getProduct}
          relatedProducts={this.state.relatedProducts}
          grabAllProductData={this.grabAllProductData}
        />
        {this.state.productQuestions.length ?
        <QAComponent productQuestions={this.state.productQuestions} productName={this.state.productData.name}/> :
        <div>
          Questions loading
          </div>}
        <RatingsAndReviews
        productReviews = {this.state.productReviews}
        reviewMetadata = {this.state.reviewMetadata}
        />
		</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
