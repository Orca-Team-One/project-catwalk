import React, { Component } from 'react';
import HelpfulButton from './HelpfulButton.jsx';
import AddAnswerButton from './AddAnswerButton.jsx';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';
import AnswerList from './AnswerList.jsx';

export default class Question extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //declaring a question object variable equal to the question object passed from Question List
    const questionObject = this.props.question;

    return (
      <>
      <div>
      <dt>
       Q: {this.props.question.question_body}
        <HelpfulButton/> <AddAnswerButton/>
        <AnswerList answers={questionObject.answers}/>
      </dt>
      <LoadMoreAnswers/>
      </div>
      </>
    )
  }
}
