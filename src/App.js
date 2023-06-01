import React from 'react'
import { Content } from './components/Content.jsx'
import { Header } from './components/TodoList/Header.jsx'
const todosData = [
	{ id: 1, title: 'Read book' },
	{ id: 2, title: 'Learn react' },
	{ id: 3, title: 'JS' },
	{ id: 4, title: 'Redux' },
]
export class App extends React.Component {
	state = {
		todos: todosData,
		filter: '',
	}
	deleteTodo = id => {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id),
		})
	}
	addTodo = text => {
		this.setState({
			todos: [...this.state.todos, { id: crypto.randomUUID(), title: text }],
		})
	}

	render() {
		const { todos } = this.state
		return (
			<>
				<Header />
				<Content
					todos={todos}
					addTodo={this.addTodo}
					deleteTodo={this.deleteTodo}
				/>
			</>
		)
	}
}

// function App() {
// 	const todos = [
// 		{ id: 1, title: 'Read book' },
// 		{ id: 2, title: 'Learn react' },
// 		{ id: 3, title: 'JS' },
// 		{ id: 4, title: 'Redux' },
// 	]
// 	return (
// 		<>
// 			<Header />
// 			<Content todos={todos} />
// 		</>
// 	)
// }

// export default App
