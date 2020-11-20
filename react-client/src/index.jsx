import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx'
import ProductView from './ProductOverview/ProductView.jsx';
import QAComponent from './QAComponents/QAComponent.jsx';
import RelatedItems_Comparison from './RelatedItems_Comparison/RelatedItems_Comparison.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productID: 5,
      productData: {},
      productStyles: {},
      productQuestions:  [
        {
            "question_id": 38,
            "question_body": "How long does it last?",
            "question_date": "2019-06-28T00:00:00.000Z",
            "asker_name": "funnygirl",
            "question_helpfulness": 13,
            "reported": 0,
            "answers": {
                "70": {
                    "id": 70,
                    "body": "Some of the seams started splitting the first time I wore it!",
                    "date": "2019-11-28T00:00:00.000Z",
                    "answerer_name": "sillyguy",
                    "helpfulness": 6,
                    "photos": []
                },
                "78": {
                    "id": 78,
                    "body": "9 lives",
                    "date": "2019-11-12T00:00:00.000Z",
                    "answerer_name": "iluvdogz",
                    "helpfulness": 31,
                    "photos": [
                        "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    ]
                }
            }
        },
        {
            "question_id": 37,
            "question_body": "Why is this product cheaper here than other sites?",
            "question_date": "2018-10-18T00:00:00.000Z",
            "asker_name": "willsmith",
            "question_helpfulness": 4,
            "reported": 0,
            "answers": {
                "68": {
                    "id": 68,
                    "body": "We are selling it here without any markup from the middleman!",
                    "date": "2018-08-18T00:00:00.000Z",
                    "answerer_name": "Seller",
                    "helpfulness": 4,
                    "photos": []
                }
            }
        },
        {
            "question_id": 34,
            "question_body": "Can I wash it?",
            "question_date": "2017-01-04T00:00:00.000Z",
            "asker_name": "luaulover",
            "question_helpfulness": 1,
            "reported": 0,
            "answers": {
                "10": {
                    "id": 10,
                    "body": "I've thrown it in the wash and it seems fine",
                    "date": "2017-01-04T00:00:00.000Z",
                    "answerer_name": "skilover",
                    "helpfulness": 1,
                    "photos": [
                        "https://images.unsplash.com/photo-1510551310160-589462daf284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80",
                        "https://images.unsplash.com/photo-1469504512102-900f29606341?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    ]
                },
                "11": {
                    "id": 11,
                    "body": "It says not to",
                    "date": "2017-01-04T00:00:00.000Z",
                    "answerer_name": "skilover",
                    "helpfulness": 2,
                    "photos": []
                },
                "12": {
                    "id": 12,
                    "body": "Yes",
                    "date": "2017-01-04T00:00:00.000Z",
                    "answerer_name": "skilover",
                    "helpfulness": 3,
                    "photos": []
                },
                "43": {
                    "id": 43,
                    "body": "I wouldn't machine wash it",
                    "date": "2017-11-04T00:00:00.000Z",
                    "answerer_name": "skilover",
                    "helpfulness": 5,
                    "photos": []
                },
                "55": {
                    "id": 55,
                    "body": "Only if you want to ruin it!",
                    "date": "2017-11-04T00:00:00.000Z",
                    "answerer_name": "skilover",
                    "helpfulness": 5,
                    "photos": []
                }
            }
        },
        {
            "question_id": 36,
            "question_body": "What fabric is the top made of?",
            "question_date": "2018-06-17T00:00:00.000Z",
            "asker_name": "funnygirl",
            "question_helpfulness": 1,
            "reported": 0,
            "answers": {
                "1": {
                    "id": 1,
                    "body": "Supposedly suede, but I think its synthetic",
                    "date": "2018-01-17T00:00:00.000Z",
                    "answerer_name": "sillyguy",
                    "helpfulness": 1,
                    "photos": []
                },
                "13": {
                    "id": 13,
                    "body": "Something pretty soft but I can't be sure",
                    "date": "2018-01-17T00:00:00.000Z",
                    "answerer_name": "sillyguy",
                    "helpfulness": 4,
                    "photos": [
                        "https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
                        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                    ]
                },
                "15": {
                    "id": 15,
                    "body": "Its the best! Seriously magic fabric",
                    "date": "2018-01-17T00:00:00.000Z",
                    "answerer_name": "sillyguy",
                    "helpfulness": 6,
                    "photos": []
                },
                "28": {
                    "id": 28,
                    "body": "Suede",
                    "date": "2018-01-17T00:00:00.000Z",
                    "answerer_name": "sillyguy",
                    "helpfulness": 0,
                    "photos": []
                }
            }
        },
        {
            "question_id": 35,
            "question_body": "Where is this product made?",
            "question_date": "2018-07-06T00:00:00.000Z",
            "asker_name": "bballfan",
            "question_helpfulness": 0,
            "reported": 0,
            "answers": {
                "27": {
                    "id": 27,
                    "body": "Canada",
                    "date": "2018-08-06T00:00:00.000Z",
                    "answerer_name": "footballfan",
                    "helpfulness": 9,
                    "photos": []
                }
            }
        }
    ],
      relatedProducts: [],
      productReviews:{},
      reviewMetadata:{},
    }
    // bind functions here?
    this.getProduct = this.getProduct.bind(this)
    this.getProductStyles = this.getProductStyles.bind(this)
    this.getQuestions = this.getQuestions.bind(this)
    this.getReviewData = this.getReviewData.bind(this)
    this.getMetaData = this.getMetaData.bind(this)
    this.getRelatedItems = this.getRelatedItems.bind(this)
  }

  componentDidMount() {
 // promise chain to call each API function


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
  getReviewData(productID) {
    axios.get(`http://3.21.164.220/reviews?product_id=${this.state.productID}`)
      .then((results) => {
          this.setState({/*do something*/})
      }).catch((err) => {
          console.log(`Error fetching review data: ${err}`)
      })
  }

  //get ratings metadata for a given product
  getMetaData (productID) {
    axios.get(`http://3.21.164.220/reviews/meta?product_id=${this.state.productID}`)
      .then((results) => {
          this.setState({/*do something*/})
      }).catch((err) => {
          console.log(`Error fetching rating metadata: ${err}`)
      })
  }

  getRelatedItems (productID) {
    axios.get(`http://3.21.164.220/products/${this.state.productID}/related`)
    .then((relatedData) => {
      this.setState({});
    }).catch(error => {console.log('There was in error in getRelatedItems')})
}

  render() {

    return (
      <div>
        <h1>Hello World</h1>
        <ProductView productData={this.state.productData} />
        <QAComponent productQuestions={this.state.productQuestions}/>
        <RatingsAndReviews/>
        <RelatedItems_Comparison/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
