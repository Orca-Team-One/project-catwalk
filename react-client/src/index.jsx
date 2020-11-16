import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Ratings_and_reviews from './Ratings_and_Reviews/Ratings_and_reviews.jsx'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div>
        <Ratings_and_reviews/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
