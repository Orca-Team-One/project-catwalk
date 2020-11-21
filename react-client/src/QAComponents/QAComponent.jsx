import React, { Component } from 'react'
import QASearchBar from './QASearchBar.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddAQuestion from './AddAQuestion.jsx';
import QuestionList from './QuestionList.jsx';

export default class QAComponent extends Component {
  constructor(props){
    super(props);

  }

  render() {
    const {productQuestions} = this.props;
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
            <QuestionList questions={productQuestions}/>
          </div>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-">
            <MoreAnsweredQuestions />
            </div>
            <div className="col-">
            <AddAQuestion/>
            </div>
          </div>
          </div>
      </>
    )
  }
}

