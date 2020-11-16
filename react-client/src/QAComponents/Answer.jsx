import React, { Component } from 'react';
import UserInfo from './UserInfo.jsx';
import HelpfulButton from './HelpfulButton.jsx';
import ReportButton from './ReportButton.jsx';

export default class Answer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log('Answer props;', this.props.answer);
    // const {answer} = this.props.answer;
    return (
      <div>
       <b>
       A:
        </b>
         {this.props.answer.body}

          <UserInfo user={this.props.answer.answerer_name}/> <HelpfulButton helpfulCount={this.props.answer.helpfulness}/> <ReportButton/>
      </div>
    )
  }
}
