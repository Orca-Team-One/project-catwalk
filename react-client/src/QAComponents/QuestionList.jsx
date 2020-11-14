import React, { Component } from 'react'

export default class QuestionList extends Component {
// var questionsArray = ['this is question 1', 'this is question 2', 'this is question 3'];
  render() {
    return (
      <div>
      {questionsArray.map((question) => {
        <div>
          question
          </div>
      })}
      </div>
    )
  }
}
