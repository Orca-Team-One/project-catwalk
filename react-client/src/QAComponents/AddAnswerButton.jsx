import React, { Component } from 'react';
import { Button, Modal} from 'react-bootstrap';
import AddAnswerModal from './AddAnswerModal.jsx';


export default class AddAnswerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHide: false
    }
  }

  handleModalShowHide() {
    this.setState({
      showHide: !this.state.showHide
    })
  }

render() {
  return (
    <div>
      <button className="addAnswerButton" onClick={() => this.handleModalShowHide()}>
        Add Answer
      </button>

    <Modal show={this.state.showHide}>
        <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
          <Modal.Title>Submit your Answer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Product Name: {this.props.questionBody}
        <AddAnswerModal/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
              Close
          </Button>
          <Button variant="primary" onClick={() => this.handleModalShowHide()}>
              Submit
          </Button>
        </Modal.Footer>
    </Modal>
    </div>
  )
  }
}



