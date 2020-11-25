import React from 'react';

export default function LoadMoreAnswers(props) {
	return (
		<button className="loadMoreOrCollapseButton" onClick={props.onClick}>
			Load More Answers
		</button>
	);
}
