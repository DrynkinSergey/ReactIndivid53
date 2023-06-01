import React from 'react'

const Todo = ({ title, deleteTodo, id }) => {
	return (
		<li>
			<span>{title}</span>
			<button onClick={() => deleteTodo(id)}>Delete</button>
		</li>
	)
}

export default Todo
