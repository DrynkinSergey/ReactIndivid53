import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const SingleUser = () => {
	const params = useParams()
	const [user, setUser] = useState({})
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
			.then(res => setUser(res.data))
	}, [params.id])

	return (
		<div>
			SingleUser #{params.id}
			<h1>Name: {user.name}</h1>
			<h2>Email: {user.email}</h2>
		</div>
	)
}
