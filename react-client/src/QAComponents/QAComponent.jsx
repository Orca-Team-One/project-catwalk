import React, { Component } from 'react'
import QASearchBar from './QASearchBar.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddAQuestion from './AddAQuestion.jsx';
import QuestionList from './QuestionList.jsx';

export default class QAComponent extends Component {
  render() {
    return (
      <>
      <div>
       <p>QandAComponent</p>
       <QASearchBar/>
        <QuestionList/>
      <p>
      <MoreAnsweredQuestions/> <AddAQuestion/>
        </p>
      </div>
      </>
    )
  }
}
