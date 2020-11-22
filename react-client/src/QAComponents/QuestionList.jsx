import React, { Component } from 'react';
import Question from './Question.jsx';
import exampleQAData from './QADummyData.js';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddAQuestion from './AddAQuestion.jsx';

export default class QuestionList extends Component {
  constructor(props){
    super(props);
    this.state = {
      questionsToShow: 2,
      showMore: true,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      questionsToShow: prevState.questionsToShow + 2
    }));
    if (this.state.questionsToShow < this.props.questions.length) {
      this.setState(prevState => ({
        showMore: !prevState.showMore,
      }))
    }
  }

  render() {
    //destructuring assingment
    const {questions} = this.props;
    const {questionsToShow} = this.state;

    //a copy of questions array takes the number of questions to be displayed from question array passed from the parent
    const copyOfQuestions = questions.slice(0, questionsToShow);
    console.log('copyOfQuestions:', copyOfQuestions)
    //the display questions array maps over the copy of Questions

    // console.log('display questions', displayQuestions)


    return (
      <>
        {copyOfQuestions.map((question) =>
          <div class="container" style={{
            paddingTop: "15px",
          }}>
          <Question question={question} key={question.id}/>
          </div>
        )}
        <div className="container">
          <div className="row">
            <div className="col-">
            {this.state.showMore ?
              <button onClick={this.handleClick}>
              More Answered Questions
              </button> :
              <>
              </>
            }
            </div>
            <div className="col-">
            <AddAQuestion/>
            </div>
          </div>
          </div>
      </>
    )
  }
}
