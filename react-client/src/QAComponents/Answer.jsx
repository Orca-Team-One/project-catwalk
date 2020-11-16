import React, { Component } from 'react';
import UserInfo from './UserInfo.jsx';
import HelpfulButton from './HelpfulButton.jsx';
import ReportButton from './ReportButton.jsx';

export default class Answer extends Component {
  render() {
    return (
      <div>
        This is the answer
        <UserInfo/> <HelpfulButton/> <ReportButton/>
      </div>
    )
  }
}
