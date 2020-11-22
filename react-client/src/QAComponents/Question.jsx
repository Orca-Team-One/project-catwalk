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
    console.log('question props:', this.props.question)
    //declaring a question object variable equal to the question object passed from Question List
    const questionObject = this.props.question;

    //destructuring assignment for helpfulness rating and quesiton body
    const {question_helpfulness, question_body} = this.props.question;

    return (
      <>
        <div className="row">
          <div className="col-">
          <b style={{
              paddingRight: "2px",
            }}>
              Q:
            </b>
           {question_body}
          </div>
          <div className="col-sm">
          </div>
          <div className="col-">
            <HelpfulButton helpfulCount={question_helpfulness}/>
           </div>
          <div className="col-">
          <AddAnswerButton questionBody={question_body}/>
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
