import React, { Component } from 'react'

export default class QASearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Have a Question? Search for Answers...',
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <>
        <label htmlFor="search"></label>
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
      </>
    )
  }
}
