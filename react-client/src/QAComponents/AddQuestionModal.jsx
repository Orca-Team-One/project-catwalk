import { Button, Modal} from 'react-bootstrap';
import React, { Component } from 'react'

const defaultState = {
  question: '',
  nickname: '',
  email: '',
}

export default class AddQuestionModal extends Component {
  constructor(){
    super();
    this.state = defaultState;

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
}

  validate(){
    let questionError = "";
    let nickNameError = "";
    let emailError = "";

    if(!this.state.question){
        questionError = "Name field is required";
    }

    if(!this.state.nickName){
        nickNameError = "Nickname field is required";
    }

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!this.state.email || reg.test(this.state.email) === false){
        emailError = "Email Field is Invalid ";
    }

    if(emailError || questionError || nickNameError){
        this.setState({questionError,emailError,nickNameError});
        return false;
    }
    return true;
  }

  submit(){
    if(this.validate()){
        console.warn(this.state);
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
                <label>Your Question:</label>
                <textarea
                  type="text"
                  placeholder="Why did you like the product or not?"
                  className="form-control"
                  name="question"
                  value={this.state.question}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.questionError}</span>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-lg-6">
                <label>Nickname:</label>
                <p>For privacy reasons, do not use your full name or email address.</p>
                <input
                  placeholder="Example: jackson11!"
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
                  placeholder="Example: jackson@email.com"
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
