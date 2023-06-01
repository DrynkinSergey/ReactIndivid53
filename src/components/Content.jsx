import React from 'react'
import TodoList from './TodoList/TodoList'
import Filters from './Filters'

export const Content = ({ todos }) => {
	return (
		<div>
			<Filters />
			<TodoList todos={todos} />
		</div>
	)
}
