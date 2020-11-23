import React, { Component } from 'react'

export default class HelpfulButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulClicked: false,
      helpfulCount: this.props.helpfulCount,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      helpfulClicked: !prevState.helpfulClicked
    }));
    if (!this.state.helpfulClicked) {
      this.setState({
        helpfulCount: (this.props.helpfulCount + 1)
      })
    } else {
      this.setState({
        helpfulCount: this.props.helpfulCount
      })
    }
  }


  render() {
      const {helpfulCount} = this.state
    return (

      <button className="helpfulButton" onClick={this.handleClick}>
        Helpful? Yes ({helpfulCount})

      </button>
    )
  }
}
