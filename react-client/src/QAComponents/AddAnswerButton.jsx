import React, { Component } from 'react';
import { Button, Modal} from 'react-bootstrap';
import AddAnswerModal from './AddAnswerModal.jsx';

export default class AddAnswerButton extends Component {
  constructor() {
    super();
    this.state = {
      showHide: false
    }
  }

  handleModalShowHide() {
    this.setState({
      showHide: !this.state.showHide
    })
  }
//   return (
//     <button className="helpfulButton" onClick={this.handleClick}>
// Helpful? Yes ({helpfulCount})

//     </button>
//     <div className="addAnswer" >
//       <div style={{
//       fontSize: '80%',
//       textDecoration: "underline",
//     }} >
//         Add Answer
//       </div>
//     </div>
//   )
render() {
  return (
    <div>
      <button className="addAnswerButton" onClick={() => this.handleModalShowHide()}>
        Add Answer
      </button>

    <Modal show={this.state.showHide}>
        <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
          <Modal.Title>Add an Answer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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



