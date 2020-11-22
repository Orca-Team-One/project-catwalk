import React, { Component } from 'react';
import Question from './Question.jsx';
import exampleQAData from './QADummyData.js';


export default class QuestionList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    //destructuring assingment
    const {questions} = this.props;

    return (
      <>
        {questions.map((question) =>
          <div class="container" style={{
            paddingTop: "15px",
          }}>
          <Question question={question} key={question.id}/>
          </div>
        )}
      </>
    )
  }
}
