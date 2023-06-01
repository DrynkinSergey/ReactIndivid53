import React from 'react'

export const AddForm = ({ addTodo }) => {
	const submit = e => {
		e.preventDefault()
		addTodo(e.target.inputValue.value)
		e.target.reset()
	}
	return (
		<form onSubmit={submit}>
			<input type='text' placeholder='Enter some text..' name='inputValue' />
			<button>Add todo</button>
		</form>
	)
}
