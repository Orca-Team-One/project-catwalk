import React, { Component } from 'react';
const axios = require('axios').default;

export default class AnswerHelpfulButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			helpfulClicked: false,
			helpfulCount: this.props.helpfulCount,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((prevState) => ({
			helpfulClicked: true,
		}));
		if (!this.state.helpfulClicked) {
			this.setState({
				helpfulCount: this.props.helpfulCount + 1,
			});
		}
		axios({
			method: 'put',
			url: `http://3.21.164.220/qa/answers/${this.props.answerID}/helpful`,
		})
			.then((response) => console.log('Put request successful:', response))
			.catch((err) =>
				console.log('There was an error making the put request:', err)
			);
	}

	render() {
		const { helpfulCount } = this.state;
		return (
			<>
				{this.state.helpfulClicked ? (
					<button className="helpfulButton">
						Helpful?
						<b
							style={{
								paddingLeft: '2px',
								fontWeight: '600',
							}}
						>
							Yes ({helpfulCount})
						</b>
					</button>
				) : (
					<button className="helpfulButton" onClick={this.handleClick}>
						Helpful? Yes ({helpfulCount})
					</button>
				)}
			</>
		);
	}
}
