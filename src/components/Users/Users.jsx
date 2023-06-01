import React from 'react'
import { UserInfo } from './UserInfo'

export const Users = ({ username }) => {
	return (
		<div>
			<h1>Users</h1>
			<UserInfo username={username} />
		</div>
	)
}
