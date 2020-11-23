import { Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react';
const axios = require('axios').default;

const defaultState = {
	answer: '',
	nickname: '',
	email: '',
	photos: [],
};

export default class AddAnswerModal extends Component {
	constructor(props) {
		super(props);
		this.state = defaultState;
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		var value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	validate() {
		let answerError = '';
		let nickNameError = '';
		let emailError = '';

		if (!this.state.answer) {
			answerError = 'Name field is required';
		}

		if (!this.state.nickName) {
			nickNameError = 'Nickname field is required';
		}

		const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!this.state.email || reg.test(this.state.email) === false) {
			emailError = 'Email Field is Invalid ';
		}

		if (emailError || answerError || nickNameError) {
			this.setState({ answerError, emailError, nickNameError });
			return false;
		}
		return true;
	}

	submit() {
		if (this.validate()) {
			axios({
				method: 'post',
				url: `http://3.21.164.220/qa/questions/${this.props.questionID}/answers`,
				data: {
					body: this.state.answer,
					name: this.state.nickName,
					email: this.state.email,
					photos: this.state.photos,
				},
			})
				.then((response) => console.log('Post request successful:', response))
				.catch((err) =>
					console.log('There was an error making the post request:', err)
				);
			this.setState(defaultState);
		}
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<h3> </h3>
						<br />

						<div className="form-row">
							<div className="form-group col-lg-6">
								<label>Answer :</label>
								<textarea
									type="text"
									className="form-control"
									name="answer"
									value={this.state.answer}
									onChange={this.handleInputChange}
								/>
								<span className="text-danger">{this.state.answerError}</span>
							</div>
						</div>

						<div className="form-row">
							<div className="form-group col-lg-6">
								<label>Nickname :</label>
								<p>
									For privacy reasons, do not use your full name or email
									addres.
								</p>
								<input
									placeholder="Example: jack543!"
									type="nickName"
									className="form-control"
									name="nickName"
									value={this.state.nickName}
									onChange={this.handleInputChange}
								/>
								<span className="text-danger">{this.state.nickNameError}</span>
							</div>
						</div>

						<div className="form-row">
							<div className="form-group col-lg-6">
								<label>Email :</label>
								<p>For authentication reasons, you will not be emailed.</p>
								<input
									placeholder="Example: jack@email.com"
									type="email"
									className="form-control"
									name="email"
									value={this.state.email}
									onChange={this.handleInputChange}
								/>
								<span className="text-danger">{this.state.emailError}</span>
							</div>
						</div>

						<div className="form-row">
							<div className="col-md-12 text-center">
								<button
									type="submit"
									className="btn btn-primary"
									onClick={() => this.submit()}
								>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
