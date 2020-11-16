import React, { Component } from 'react';
import Question from './Question.jsx';
import exampleQAData from './QADummyData.js';

export default class QuestionList extends Component {

  render() {
    var qArray = exampleQAData[0].results;
    const questionList = qArray.map((question) =>
        <Question question={question} key={question.id}/>
    );

    return (
      <>
      {questionList}
      </>
    )
  }
}
