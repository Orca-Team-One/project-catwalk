import React, { Component } from 'react';
import UserInfo from '../Answer/UserInfo.jsx';
import HelpfulButton from '../HelpfulButton.jsx';
import ReportButton from '../Answer/ReportButton.jsx';

export default class Answer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log('Answer props;', this.props.answer);
    // const {answer} = this.props.answer;
    return (
      <div class="container">
        <div class="row">
          <div class="col-" style={{
            paddingBottom: "5px",
            paddingTop: "10px",
          }}>
            <b style={{
              paddingRight: "2px",
            }}>
              A:
            </b>
            {this.props.answer.body}
          </div>
        </div>
          <div class="row">
            <div class="col-">
              <UserInfo user={this.props.answer.answerer_name}/>
            </div>
            <div class="col-">
            |
            </div>
            <div class="col-">
              <HelpfulButton helpfulCount={this.props.answer.helpfulness}/>
            </div>

            <div class="col-">
            |
            </div>

            <div class="col-">
              <ReportButton/>
            </div>
          </div>
      </div>
    )
  }
}
