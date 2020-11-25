import React from 'react';
import Answer from './Answer.jsx';

export default function PartialAnswersList(props) {
	const answers = props.answersList.slice(0, 2);
	const answerItems = answers.map((answer) => (
		<div className="row">
			<Answer answer={answer} key={answer.id} />
		</div>
	));
	return <div>{answerItems}</div>;
}
