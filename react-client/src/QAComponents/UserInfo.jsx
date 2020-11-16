import React, { Component } from 'react'

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.user}
      </div>
    )
  }
}
