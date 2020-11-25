import React from 'react';
import Answer from './Answer.jsx';

export default function FullAnswersList(props) {
	const answers = props.answersList;
	const answerItems = answers.map((answer) => (
		<div className="row">
			<Answer answer={answer} key={answer.id} />
		</div>
	));
	return <div>{answerItems}</div>;
}
