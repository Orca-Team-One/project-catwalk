import React, { Component } from 'react';
import { Button, Modal} from 'react-bootstrap';
import AddQuestionModal from './AddQuestionModal.jsx';


export default class AddAQuestion extends Component {
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
  //destructuring assignment
  const {productName} = this.props;

  return (
    <div>
      <button onClick={() => this.handleModalShowHide()}>
        Add A Question
      </button>

    <Modal show={this.state.showHide}>
        <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
          <Modal.Title>Ask Your Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          About the {productName}
        <AddQuestionModal/>

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



