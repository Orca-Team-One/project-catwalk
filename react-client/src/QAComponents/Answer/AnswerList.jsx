import React, { Component } from 'react';
import Answer from './Answer.jsx';
import axios from 'axios';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';
import CollapseAnswers from './CollapseAnswers.jsx';

export default class AnswerList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allAnswers: false,
		};
		this.handleCollapseClick = this.handleCollapseClick.bind(this);
		this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
	}

	handleCollapseClick() {
		this.setState({ allAnswers: false });
		console.log(this.state.allAnswers);
	}

	handleLoadMoreClick() {
		this.setState({ allAnswers: true });
	}

	render() {
		//destructuring assignment
		const { answers } = this.props;

		//an array of all the answers
		const answersArray = Object.values(answers);

		console.log('answerArray', answersArray);
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
		const sortedArray = answersArray.sort(function (a, b) {
			return b.helpfulness - a.helpfulness;
		});

		// console.log('sorted Array', sortedArray)
		//add the remaining answers, if any, in order of helpfulness
		if (sortedArray.length !== 0) {
			finalAnswerList = finalAnswerList.push(sortedArray);
		}

		// console.log('finalAnswers', finalAnswerList)
		//if all answers need to be displayed:
		const fullAnswerList = answersArray.map((answer) => (
			<Answer answer={answer} key={answer.id} />
		));

		//Load More Answers button functionality
		const showAllAnswers = this.state.allAnswers;
		let button;
		if (showAllAnswers) {
			button = <CollapseAnswers onClick={this.handleCollapseClick} />;
		} else {
			button = <LoadMoreAnswers onClick={this.handleLoadMoreClick} />;
		}

		return (
			<div class="container">
				<>
					<div className="row">{fullAnswerList[0]}</div>
					<div className="row">{fullAnswerList[1]}</div>
					<div className="row">{button}</div>
				</>
			</div>
		);
	}
}

// componentDidMount() {
// 	this.getAnswers();
// }

// getAnswers() {
// 	axios
// 		.get(
// 			`http://3.21.164.220/qa/questions?product_id=${this.props.questionID}`
// 		)
// 		.then((response) => {
// 			this.setState({ answersList: response.results });
// 		})
// 		.catch((err) =>
// 			console.log('There was an error getting the answers list:', err)
// 		);
// }
