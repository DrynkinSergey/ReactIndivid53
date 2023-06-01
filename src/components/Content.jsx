import React from 'react'
import TodoList from './TodoList/TodoList'
import Filters from './Filters'

export const Content = ({ todos, deleteTodo, addTodo }) => {
	return (
		<div>
			<Filters />
			<TodoList addTodo={addTodo} todos={todos} deleteTodo={deleteTodo} />
		</div>
	)
}
