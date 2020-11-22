import React, { Component } from 'react'

export default class QASearchBar extends Component {
  constructor({keyword, setKeyword}) {
    super();
    this.state = {
    }
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value})
  // }

  render() {
    return (
      <>
        <input className="searchBar"
        // key='random1'
        // value={keyword}
        placeholder={'Have a Question? Search for Answers...'}
        onChange={(e) => setKeyword(e.target.value)}></input>
      </>
    )
  }
}
