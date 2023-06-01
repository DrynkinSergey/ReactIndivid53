import React from 'react'
import SingleUser from './SingleUser'

export const UserInfo = ({ username }) => {
	return (
		<div>
			<h1>UserINFO</h1>

			<SingleUser username={username} />
		</div>
	)
}
