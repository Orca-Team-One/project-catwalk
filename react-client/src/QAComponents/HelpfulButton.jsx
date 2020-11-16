import React, { Component } from 'react'

export default class HelpfulButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {

      const count = this.props.helpfulCount || 0;
    return (
      <div>
      <button>
        Helpful? Yes ({count})
      </button>
      </div>
    )
  }
}

