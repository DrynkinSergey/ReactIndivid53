import React from 'react'
import { Header } from './Header'
import { AddForm } from './AddForm'
import { MainContent } from './MainContent'
import { Footer } from './Footer'
import Todo from '../Todo'

const TodoList = ({ todos }) => {
	return (
		<>
			<AddForm />
			<ul>
				{todos.map(todo => (
					<Todo title={todo.title} />
				))}
			</ul>
		</>
	)
}

export default TodoList
