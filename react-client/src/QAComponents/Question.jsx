import React, { Component } from 'react';
import HelpfulButton from './HelpfulButton.jsx';
import AddAnswerButton from './AddAnswerButton.jsx';
import AnswerList from './Answer/AnswerList.jsx';

export default class Question extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		//declaring a question object variable equal to the question object passed from Question List
		const questionObject = this.props.question;

		//destructuring assignment for helpfulness rating, question body, and question id
		const {
			question_helpfulness,
			question_body,
			question_id,
		} = this.props.question;

		//destructuring assignment
		const { productName } = this.props;

		return (
			<>
				<div className="row">
					<div className="col-">
						<b
							style={{
								paddingRight: '2px',
							}}
						>
							Q:
						</b>
						{question_body}
					</div>
					<div className="col-sm"></div>
					<div className="col-">
						<HelpfulButton
							helpfulCount={question_helpfulness}
							questionID={question_id}
						/>
					</div>
					<div className="col-">
						<AddAnswerButton
							questionBody={question_body}
							productName={productName}
							questionID={question_id}
						/>
					</div>
				</div>
				<div className="row">
					<AnswerList
						answers={questionObject.answers}
						questionID={question_id}
					/>
				</div>
				<div
					className="row"
					style={{
						paddingTop: '10px',
						fontWeight: 'bold',
					}}
				></div>
			</>
		);
	}
}
