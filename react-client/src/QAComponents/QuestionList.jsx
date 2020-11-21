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
    console.log('questions from questionlist:', questions)
    //sorting the questions array by their helpfulness rating
    const sortedArray = questions.sort(function(a, b) {
      return b.question_helpfulness - a.question_helpfulness;
    });

    console.log(sortedArray)
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
