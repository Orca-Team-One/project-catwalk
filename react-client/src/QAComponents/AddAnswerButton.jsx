import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddAnswerModal from './AddAnswerModal.jsx';

export default class AddAnswerButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showHide: false,
		};
	}

	handleModalShowHide() {
		this.setState({
			showHide: !this.state.showHide,
		});
	}

	render() {
		//destructuring assignments
		const { productName, questionID, productID } = this.props;

		return (
			<div>
				<button
					className="addAnswerButton"
					onClick={() => this.handleModalShowHide()}
				>
					Add Answer
				</button>

				<Modal show={this.state.showHide}>
					<Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
						<Modal.Title>Submit your Answer</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Product Name: {productName}
						<AddAnswerModal questionID={questionID} />
					</Modal.Body>
					<Modal.Footer></Modal.Footer>
				</Modal>
			</div>
		);
	}
}
