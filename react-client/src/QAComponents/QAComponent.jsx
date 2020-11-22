import React, { Component } from 'react'
import QASearchBar from './QASearchBar.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddAQuestion from './AddAQuestion.jsx';
import QuestionList from './QuestionList.jsx';

export default class QAComponent extends Component {
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
    if (this.state.questionsToShow < this.props.productQuestions.length || this.props.productQuestions.length <= 2) {
      this.setState(prevState => ({
        showMore: !prevState.showMore,
      }))
    }
  }

  render() {
    //destructuring assignment
    const {productQuestions} = this.props;
    const {questionsToShow} = this.state;

    //a copy of questions array takes the number of questions to be displayed from question array passed from the parent
    const copyOfQuestions = productQuestions.slice(0, questionsToShow);
    console.log('copyOfQuestions:', copyOfQuestions)

    //sorting the questions array by their helpfulness rating
    const sortedArray = copyOfQuestions.sort(function(a, b) {
      return b.question_helpfulness - a.question_helpfulness;
      });

    console.log('sortedArray:', sortedArray)

    return (
      <>
      <div className="askWidgetContainer">
        <h2 className="askWidgetHeader">
          Questions and Answers
        </h2>

        <div className="searchBar">
            <QASearchBar/>
        </div>
          <div>
            <QuestionList questions={sortedArray}/>
          </div>
      </div>
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

