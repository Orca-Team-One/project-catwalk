import React, { Component } from 'react';
import Question from './Question.jsx';
import exampleQAData from './QADummyData.js';

export default class QuestionList extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions: this.props.questions,
    }
  }

  render() {
    //destructuring assignment
    const {questions} = this.state;

    // //questionList array
    // var questionList = [];

    // //iterate over questions array to find and remove seller
    // for (var i = 0; i < questions.length; i++) {
    //   console.log("current seller", questions[i])
    //   if (questions[i].answerer_name === "Seller") {
    //     questionList.push(questions.splice(i, 1));
    //   }
    // }

    // //filtering for seller
    // var sellerArray = questions.filter((user) => user.answerer_name === "Seller");

    //sorting the questions array by their helpfulness rating
    const sortedArray = questions.sort(function(a, b) {
      return b.question_helpfulness - a.question_helpfulness;
    });

    // //add the remaining answers in order of helpfulness
    // questionList = questionList.push(sortedArray);

    return (
      <>
        <div class="container" style={{
          paddingTop: "15px",
        }}>
        <Question question={[sortedArray[0]]} />
        </div>
        <div class="container" style={{
          paddingTop: "15px",
        }}>
        <Question question={[sortedArray[1]]} />
        </div>
      </>
    )
  }
}
