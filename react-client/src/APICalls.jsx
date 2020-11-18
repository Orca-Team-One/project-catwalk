import axios from 'axios';

var apiURL = 'http://3.21.164.220/';

// product ID to be globally accessible
// const productID = 'insertproductID';


// get all products
const getAllProducts = () => {
  axios.get(`${apiURL}/products`)
    .then((results) => {
      this.setState({});
    })
    .catch((err) => {
      console.log(`Error fetching data for all products: ${err}`)
    })
}

// get a single product
const getProduct = (productID) => {
  axios.get(`${apiURL}/products/${productID}`)
    .then((results) => {
      this.setState({});
    })
    .catch((err) => {
      console.log(`Error fetching data for current product: ${err}`)
    })
}

// get product styles for a given product
const getProductStyles = (productID) => {
  axios.get(`${apiURL}/products/${productID}/styles`)
    .then((results) => {
      this.setState({});
    })
    .catch((err) => {
      console.log(`Error fetching data for current product's styles: ${err}`)
    })
}

//get review data for given product
const getReviewData = (productID) => {
// product ID hardcoded for now. It will be received as argument
productId = 5
    axios.get(`http://3.21.164.220/reviews?product_id=${productID}`)
    .then((results) => {
        this.setState({/*do something*/})
    }).catch((err) => {
        console.log(`Error fetching review data: ${err}`)
    })
}

//get ratings metadata for a given product
   const getMetaData = (productID) => {
       // product ID hardcoded for now. It will be received as argument
       productID = 5
        axios.get(`http://3.21.164.220/reviews/meta?product_id=${productID}`)
        .then((results) => {
            this.setState({/*do something*/})
        }).catch((err) => {
            console.log(`Error fetching rating metadata: ${err}`)
        })
   }

// get questions for a single product
const getQuestions = (productID) => {
    axios.get(`${apiURL}/qa/questions/${productID}`)
    .then((data) => {
      this.setState({'do something'})
    })
    .catch(error => console.log('there was an error getting the questions:', error));
}


// get related items for a single product
const getRelatedItems = (productID) => {
  axios.get(`${apiURL}/products/${productID}/related`)
  .then((relatedData) => {
    this.setState({});
  }).catch(error => console.log('There was in error in getRelatedItems'))
};