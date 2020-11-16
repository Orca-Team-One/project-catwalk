import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductView from './ProductOverview/ProductView.jsx';
import QAComponent from './QAComponents/QAComponent.jsx';

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
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
