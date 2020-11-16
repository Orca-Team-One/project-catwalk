import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductView from './ProductOverview/ProductView.jsx';
import QAComponent from './QAComponents/QAComponent.jsx';
import RelatedItems_Comparison from './RelatedItems_Comparison/RelatedItems_Comparison.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (

      <div>
      <h1>Hello World</h1>
        <ProductView />
        <QAComponent/>
        <RelatedItems_Comparison/>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
