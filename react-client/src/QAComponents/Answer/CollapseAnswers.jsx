import React from 'react';

export default function CollapseAnswers(props) {
	return (
		<button className="loadMoreOrCollapseButton" onClick={props.onClick}>
			Collapse Answers
		</button>
	);
}
