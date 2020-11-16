import React, { Component } from 'react';
import Answer from './Answer.jsx';

export default class AnswerList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const answersArray = Object.values(this.props.answers)
    const answerList = answersArray.map((answer) =>
    <Answer answer={answer} key={answer.id}/> )

    return (
      <div>
        {answerList}
      </div>
    )
  }
}
