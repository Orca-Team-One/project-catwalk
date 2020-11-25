import React, { Component } from 'react';
import UserInfo from '../Answer/UserInfo.jsx';
import HelpfulButton from '../HelpfulButton.jsx';
import ReportButton from '../Answer/ReportButton.jsx';
import AnswerHelpfulButton from '../Answer/AnswerHelpfulButton.jsx';

export default class Answer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div
						className="col-"
						style={{
							paddingBottom: '5px',
							paddingTop: '10px',
						}}
					>
						<b
							style={{
								paddingRight: '2px',
							}}
						>
							A:
						</b>
						{this.props.answer.body}
					</div>
				</div>
				<div className="row">
					<div className="col-">
						<UserInfo
							user={this.props.answer.answerer_name}
							date={this.props.answer.date}
						/>
					</div>
					<div
						className="col-"
						style={{
							paddingLeft: '5px',
							paddingRight: '5px',
						}}
					>
						|
					</div>
					<div className="col-">
						<AnswerHelpfulButton
							helpfulCount={this.props.answer.helpfulness}
							answerID={this.props.answer.id}
						/>
					</div>

					<div
						className="col-"
						style={{
							paddingLeft: '5px',
							paddingRight: '5px',
						}}
					>
						|
					</div>

					<div className="col-">
						<ReportButton answerID={this.props.answer.id} />
					</div>
				</div>
			</div>
		);
	}
}
