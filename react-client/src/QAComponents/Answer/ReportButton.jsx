import React, { Component } from 'react'

export default class ReportButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reportClicked: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      reportClicked: !prevState.reportClicked
    }));
  }

  render() {
    return (
      <>
      {this.state.reportClicked ?
      <button className="reportButton" onClick={this.handleClick}>
        Reported
      </button>  :

      <button className="reportButton" onClick={this.handleClick}>
        Report
      </button>
      }
      </>
    )
  }
}



