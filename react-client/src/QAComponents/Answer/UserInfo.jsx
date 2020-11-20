import React, { Component } from 'react';
var dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat);

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const date = dayjs(this.props.date).format(MMMM-D-YYYY);
    return (
      <div style={{
        fontSize: "90%",
        paddingRight: "5px",
      }}>
        User: {this.props.user}, {this.props}
      </div>
    )
  }
}
