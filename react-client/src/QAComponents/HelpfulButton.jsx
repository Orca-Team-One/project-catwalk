import React, { Component } from 'react'

export default class HelpfulButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {

      const count = this.props.helpfulCount || 0;
    return (
      <div className="helpful">
      <div style={{
      fontSize: '80%',
      paddingLeft: "5px",
      paddingRight: "5px"
         }}>
        Helpful? Yes ({count})
      </div>
      </div>
    )
  }
}
