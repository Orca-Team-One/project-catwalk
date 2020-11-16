import React, { Component } from 'react'
import QASearchBar from './QASearchBar.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddAQuestion from './AddAQuestion.jsx';
import QuestionList from './QuestionList.jsx';

export default class QAComponent extends Component {
  render() {
    return (
      <>
      <div class="bg-gray-100 p-8">
       <p class="mt-6 text-2xl text-gray-900">QandAComponent</p>
       <QASearchBar/>
          <QuestionList/>
      <MoreAnsweredQuestions/> <AddAQuestion/>
      </div>
      </>
    )
  }
}
