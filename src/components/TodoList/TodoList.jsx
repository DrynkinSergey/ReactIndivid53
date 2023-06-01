import React from 'react'
import { Header } from './Header'
import { AddForm } from './AddForm'
import { MainContent } from './MainContent'
import { Footer } from './Footer'
import Todo from '../Todo'

const TodoList = ({ todos, deleteTodo, addTodo }) => {
	return (
		<>
			<AddForm addTodo={addTodo} />
			<ul>
				{todos.map(todo => (
					<Todo
						key={todo.id}
						title={todo.title}
						id={todo.id}
						deleteTodo={deleteTodo}
					/>
				))}
			</ul>
		</>
	)
}

export default TodoList
