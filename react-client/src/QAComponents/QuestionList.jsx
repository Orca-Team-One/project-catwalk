import React, { Component } from 'react';
import Question from './Question.jsx';
import exampleQAData from './QADummyData.js';

export default class QuestionList extends Component {

  render() {
    var qArray = exampleQAData[0].results;
    // const questionList = qArray.map((question) =>
    //     <Question question={question} key={question.id}/>);
    // const prevQuestions = [questionList[0], questionList[1]]

    return (
      <>
        <div class="container" style={{
          paddingTop: "15px",
        }}>
        <Question question={qArray[0]} />
        </div>
        <div class="container" style={{
          paddingTop: "15px",
        }}>
        <Question question={qArray[1]} />
        </div>
      </>
    )
  }
}
