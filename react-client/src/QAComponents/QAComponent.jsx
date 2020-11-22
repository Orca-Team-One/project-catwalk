import React, { Component } from 'react'
import QASearchBar from './QASearchBar.jsx';

import QuestionList from './QuestionList.jsx';

export default class QAComponent extends Component {
  constructor(props){
    super(props);

  }

  render() {
    //destructuring assignment
    const {productQuestions} = this.props;
    //sorting the questions array by their helpfulness rating
    const sortedArray = productQuestions.sort(function(a, b) {
      return b.question_helpfulness - a.question_helpfulness;
      });
    return (
      <>
      <div className="askWidgetContainer">
        <h2 className="askWidgetHeader">
          Questions and Answers
        </h2>

        <div className="searchBar">
            <QASearchBar/>
        </div>
          <div>
            <QuestionList questions={sortedArray}/>
          </div>
      </div>

      </>
    )
  }
}

