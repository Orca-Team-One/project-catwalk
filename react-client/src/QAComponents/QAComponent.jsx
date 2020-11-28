import React, { Component } from 'react';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddAQuestion from './AddAQuestion.jsx';
import QuestionList from './QuestionList.jsx';

export default class QAComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questionsToShow: 4,
			showMore: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if (
			this.state.questionsToShow < this.props.productQuestions.length ||
			this.props.productQuestions.length <= 4
		) {
			this.setState((prevState) => ({
				showMore: !prevState.showMore,
			}));
		}
	}

	render() {
		//destructuring assignments
		const { productQuestions, productName, productID } = this.props;
		const { questionsToShow } = this.state;

		//a copy of questions array takes the number of questions to be displayed from question array passed from the parent
		const copyOfQuestions = productQuestions.slice(0, questionsToShow);

		//sorting the questions array by their helpfulness rating
		const sortedArray = copyOfQuestions.sort(function (a, b) {
			return b.question_helpfulness - a.question_helpfulness;
		});

		//a questionSection variable will store which of the two renders should be returned below
		let questionSection;
		if (productQuestions.length > 0) {
			questionSection = (
				<QuestionList
					questions={sortedArray}
					productName={productName}
					allQuestions={productQuestions}
				/>
			);
		} else {
			questionSection = <div></div>;
		}

		return (
			<>
				<div className="askWidgetContainer">
					<h2 className="askWidgetHeader">Questions and Answers</h2>
					{/*
					<div className="searchBar">
						<QASearchBar />
					</div> */}
					<div
						style={{
							overflow: 'auto',
							maxHeight: '600px',
							overflowX: 'hidden',
						}}
					>
						{questionSection}
					</div>
					<div className="container">
						<div className="row">
							<div className="col-">
								{this.state.showMore ? (
									<button onClick={this.handleClick}>
										More Answered Questions
									</button>
								) : (
									<></>
								)}
							</div>

							<div className="col-">
								<AddAQuestion productName={productName} productID={productID} />
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
