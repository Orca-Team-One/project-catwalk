import React, { Component } from 'react';
import Question from './Question.jsx';
import exampleQAData from './QADummyData.js';

export default class QuestionList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: null,
		};
		this.searchSpace = this.searchSpace.bind(this);
	}

	searchSpace(event) {
		let keyword = event.target.value;
		this.setState({
			search: keyword,
		});
	}

	render() {
		//destructuring assingment
		const { questions, productName, allQuestions } = this.props;

		const items = questions
			.filter((data) => {
				if (this.state.search == null) {
					return data;
				} else if (
					data.question_body
						.toLowerCase()
						.includes(this.state.search.toLowerCase())
				) {
					return data;
				}
			})
			.map((question) => (
				<div
					class="container"
					style={{
						paddingTop: '15px',
					}}
				>
					<Question
						question={question}
						key={question.question_id}
						productName={productName}
					/>
				</div>
			));

		return (
			<>
				<input
					className="searchBar"
					type="text"
					placeholder={'Have a Question? Search for Answers...'}
					onChange={(e) => this.searchSpace(e)}
				></input>
				<div
					style={{
						overflow: 'auto',
						maxHeight: '500px',
						overflowX: 'hidden',
					}}
				>
					{items}
				</div>
			</>
		);
	}
}
