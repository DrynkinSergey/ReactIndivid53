import React, { useEffect, useState } from 'react'
import { Button } from '../Button'

// export class Counter extends React.Component {
// 	state = {
// 		count: 0,
// 		isOpen: false,
// 	}
// 	componentDidMount() {
// 		console.log('Компонент появился ')
// 	}
// 	componentDidUpdate(prevProps, prevState) {
// 		if(prevState.counter !== this.state.counter){
// 	fasdfasfasfadf
// }
// 		if(prevState.counter !== this.state.counter){
// 	fasdfasfasfadf
// }
// 		if(prevState.counter !== this.state.counter){
// 	fasdfasfasfadf
// }
// 	}

// 	increment = () => {
// 		this.setState({ count: this.state.count + 1 })
// 	}
// 	decrement = () => {
// 		this.setState({ count: this.state.count - 1 })
// 	}
// 	toggle = () => {
// 		this.setState({ isOpen: !this.state.isOpen })
// 	}
// 	render() {
// 		return (
// 			<div style={{ fontSize: '2rem' }}>
// 				<button onClick={this.decrement}>-</button>
// 				<span>{this.state.count}</span>
// 				<button onClick={this.increment}>+</button>

// 				<hr />
// 				<button onClick={() => this.toggle()}>Open/Close</button>
// 				{this.state.isOpen && <Button title={this.state.count} />}
// 			</div>
// 		)
// 	}
// }
export const Counter = () => {
	const [count, setCount] = useState(0)
	const [isOpen, setIsOpen] = useState(false)
	const [user, setUser] = useState({
		name: 'Vasya',
		age: 75,
	})

	useEffect(() => {
		console.log('Первый рендер ')
	}, [])

	useEffect(() => {
		console.log('Будет происходить рендер при изменении каунтера ')
	}, [count])

	useEffect(() => {
		if (count >= 3) {
			console.log('Изменили счетчик или пользователя ')
		}
	}, [count, user])
	// useEffect(() => {
	// 	console.log('Каждый рендер ')
	// })

	const increment = () => {
		// this.setState({ count: this.state.count + 1 })
		setCount(prevState => prevState + 1)
	}
	const decrement = () => {
		setCount(prevState => prevState - 1)

		// this.setState({ count: this.state.count - 1 })
	}
	const toggle = () => {
		setIsOpen(prev => !prev)
		// this.setState({ isOpen: !this.state.isOpen })
	}
	const reset = () => {
		setCount(0)
	}
	const changeUser = () => {
		setUser(prevState => ({
			...prevState,
			name: 'Petya',
		}))
	}

	return (
		<div style={{ fontSize: '2rem' }}>
			<button onClick={decrement}>-</button>
			<span>{count}</span>
			<button onClick={increment}>+</button>

			<hr />
			<button onClick={() => toggle()}>Open/Close</button>
			<button onClick={() => reset()}>Reset</button>
			<button onClick={() => changeUser()}>Change</button>
			{isOpen && <Button title={count} />}
		</div>
	)
}
