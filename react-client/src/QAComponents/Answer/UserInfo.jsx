import React, { Component } from 'react'

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{
        fontSize: "90%",
        paddingRight: "5px",
      }}>
        User: {this.props.user}
      </div>
    )
  }
}
