import React from 'react'
import HelpfulButton from './HelpfulButton.jsx';
import AddAnswerButton from './AddAnswerButton.jsx';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';
import AnswerList from './AnswerList.jsx';

export default function Question() {
  return (
    <div>
      Question Text <HelpfulButton/> <AddAnswerButton/>
        <AnswerList/>
      <LoadMoreAnswers/>
    </div>
  )
}
