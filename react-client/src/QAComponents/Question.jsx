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
        <div class="row">
          <div class="col-">
          <b style={{
              paddingRight: "2px",
            }}>
              Q:
            </b>
           {this.props.question.question_body}
          </div>
          <div class="col-sm">
          </div>
          <div class="col-">
            <HelpfulButton/>
           </div>
          <div class="col-">
          <AddAnswerButton/>
          </div>
        </div>
      <div class="row">
        <AnswerList answers={questionObject.answers}/>
      </div>
      <div class="row" style={{
        paddingTop: "10px",
        fontWeight: "bold",
      }}>
      <LoadMoreAnswers/>
      </div>

      </>
    )
  }
}
