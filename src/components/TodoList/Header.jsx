import React from 'react'
import Links from '../Links'

export const Header = ({ title }) => {
	return (
		<header>
			<h1>{title}</h1>
			<Links />
		</header>
	)
}
