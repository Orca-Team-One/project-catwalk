import { Button, Modal} from 'react-bootstrap';
import React, { Component } from 'react'

export default class AddAnswerModal extends Component {
  constructor(){
    super();
    this.state = {
      answer: null,
      nickname: null,
      email: null,
      photos: [],
    }
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
    let answerError = "";
    let nickNameError = "";
    let emailError = "";

    if(!this.state.answer){
        answerError = "Name field is required";
    }

    if(!this.state.nickName){
        nickNameError = "nickName field is required";
    }

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!this.state.email || reg.test(this.state.email) === false){
        emailError = "Email Field is Invalid ";
    }

    if(emailError || answerError || nickNameError){
        this.setState({answerError,emailError,nickNameError});
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

                        <h3>React Custom Form Validation</h3><br />

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Answer :</label>
                                    <input type="text" className="form-control" name="answer" value={this.state.answer} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.answerError}</span>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Nickname :</label>
                                    <input type="nickName" className="form-control" name="nickName" value={this.state.nickName} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.nickNameError}</span>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Email :</label>
                                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                    <span className="text-danger">{this.state.emailError}</span>
                                </div>
                            </div>


                            <div className="form-row">
                                <div className="col-md-12 text-center">
                                    <button type="submit" className="btn btn-primary" onClick={()=>this.submit()}>Submit</button>
                                </div>
                            </div>

                    </div>
                </div>


      </div>
    )
  }
}
