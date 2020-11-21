import React, { Component } from 'react';
import Answer from './Answer/Answer.jsx';

export default class AnswerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allAnswers: false
    }
  }
  render() {
    //destructuring assignment
    const {answers} = this.props;

    //an array of all the answers
    const answersArray = Object.values(answers)

    // console.log('answerArray', answersArray)
    //final answer list array
    var finalAnswerList = [];

    //iterate over answers array to find and remove seller
    // for (var i = 0; i < answersArray.length; i++) {
    //   if (answersArray[i].answerer_name === "Seller") {
    //     finalAnswerList.push(answersArray.splice(i, 1));
    //   }
    // }
    // finalAnswerList = finalAnswerList.flat();
    // console.log('finalAnswerList', finalAnswerList)

    //sorting the answers array by their helpfulness rating
    const sortedArray = answersArray.sort(function(a, b) {
      return b.helpfulness - a.helpfulness;
    });

    // console.log('sorted Array', sortedArray)
    //add the remaining answers, if any, in order of helpfulness
    if (sortedArray.length !== 0) {
      finalAnswerList = finalAnswerList.push(sortedArray);
    }

    // console.log('finalAnswers', finalAnswerList)
    //if all answers need to be displayed:
    const fullAnswerList = answersArray.map((answer) =>
    <Answer answer={answer} key={answer.id}/> )

    return (

      <div class="container">
        <>
        <div class="row">
          {fullAnswerList[0]}
        </div>
        <div class="row">
          {fullAnswerList[1]}
        </div>
        </>
      </div>
    )
  }
}
