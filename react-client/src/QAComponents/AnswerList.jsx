import React, { Component } from 'react';
import Answer from './Answer/Answer.jsx';

export default class AnswerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allAnswers: false
    }
  }
  render() {
    //an array of all the answers
    const answersArray = Object.values(this.props.answers)
    //if all answers need to be displayed:
    const answerList = answersArray.map((answer) =>
    <Answer answer={answer} key={answer.id}/> )

    return (

      <div class="container">
        <>
        <div class="row">
          {answerList[0]}
        </div>
        <div class="row">
          {answerList[1]}
        </div>
        </>
      </div>
    )
  }
}
