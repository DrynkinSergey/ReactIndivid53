import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Users = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(res => setUsers(res.data))
	}, [])

	return (
		<div>
			<h1>Users</h1>
			{users.map(user => (
				<NavLink key={user.id} to={`${user.id}`}>
					<li>{user.name}</li>
				</NavLink>
			))}
		</div>
	)
}
