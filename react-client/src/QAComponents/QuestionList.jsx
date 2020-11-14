import React, { Component } from 'react';
import Question from './Question.jsx'

export default class QuestionList extends Component {
// const qArray = ['this is question 1', 'this is question 2', 'this is question 3']
  render() {
    return (
      <div>
        <Question/>
        <Question/>
      </div>
    )
  }
}
