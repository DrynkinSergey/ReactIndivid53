import React from 'react'

export class Counter extends React.Component {
	state = {
		count: 0,
	}
	increment = () => {
		this.setState({ count: this.state.count + 1 })
	}
	decrement = () => {
		this.setState({ count: this.state.count - 1 })
	}
	render() {
		return (
			<div style={{ fontSize: '2rem' }}>
				<button onClick={this.decrement}>-</button>
				<span>{this.state.count}</span>
				<button onClick={this.increment}>+</button>
			</div>
		)
	}
}
