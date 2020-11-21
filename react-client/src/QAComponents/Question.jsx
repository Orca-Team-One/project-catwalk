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
    const questionObject = this.props.question[0];
    console.log('questionObject from Question:', questionObject)
    //destructuring assignment for helpfulness rating
    const {question_helpfulness} = this.props.question
    return (
      <>
        <div className="row">
          <div className="col-">
          <b style={{
              paddingRight: "2px",
            }}>
              Q:
            </b>
           {this.props.question.question_body}
          </div>
          <div className="col-sm">
          </div>
          <div className="col-">
            <HelpfulButton helpfulCount={question_helpfulness}/>
           </div>
          <div className="col-">
          <AddAnswerButton/>
          </div>
        </div>
      <div className="row">
        <AnswerList answers={questionObject.answers}/>
      </div>
      <div className="row" style={{
        paddingTop: "10px",
        fontWeight: "bold",
      }}>
      <LoadMoreAnswers/>
      </div>

      </>
    )
  }
}
