import React, { Component } from 'react';
import Answer from './Answer/Answer.jsx';

export default class AnswerList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const answersArray = Object.values(this.props.answers)
    const answerList = answersArray.map((answer) =>
    <Answer answer={answer} key={answer.id}/> )
    const prevAnswers = [answerList[0], answerList[1]]

    return (
      <>
      <div class="container">
        <div class="row">
          {answerList[0]}
        </div>
        <div class="row">
          {answerList[1]}
        </div>
      </div>
      </>
    )
  }
}
