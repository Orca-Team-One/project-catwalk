import React, { Component } from 'react';
var dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

export default class UserInfo extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const date = dayjs(this.props.date).format('MMMM D, YYYY');
		// console.log('userinfo props', this.props)
		return (
			<>
				{this.props.user === 'Seller' ? (
					<div
						style={{
							fontSize: '80%',
							paddingRight: '5px',
						}}
					>
						by
						<b
							style={{
								paddingLeft: '5px',
								paddingRight: '5px',
							}}
						>
							{this.props.user}
						</b>
						{date}
					</div>
				) : (
					<div
						style={{
							fontSize: '80%',
							paddingRight: '5px',
						}}
					>
						by {this.props.user} {date}
					</div>
				)}
			</>
		);
	}
}
