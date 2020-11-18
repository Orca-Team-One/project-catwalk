import React, { Component } from 'react'
import QASearchBar from './QASearchBar.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddAQuestion from './AddAQuestion.jsx';
import QuestionList from './QuestionList.jsx';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

export default class QAComponent extends Component {
  render() {
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
            <QuestionList/>
          </div>
      </div>
        <div class="container">
          <div class="row">
            <div class="col-">
            <MoreAnsweredQuestions />
            </div>
            <div class="col-">
            <AddAQuestion/>
            </div>
          </div>
          </div>
      </>
    )
  }
}

