import React, { Component } from 'react';
const axios = require('axios').default;

export default class ReportButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reportClicked: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			reportClicked: true,
		});
		axios({
			method: 'put',
			url: `http://3.21.164.220/qa/answers/${this.props.answerID}/report`,
		})
			.then((response) => console.log('Answer reported:', response))
			.catch((err) =>
				console.log('There was an error making the put request:', err)
			);
	}

	render() {
		return (
			<>
				{this.state.reportClicked ? (
					<button className="reportButton">Reported</button>
				) : (
					<button className="reportButton" onClick={this.handleClick}>
						Report
					</button>
				)}
			</>
		);
	}
}
