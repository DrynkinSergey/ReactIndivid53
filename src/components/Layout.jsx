import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '300px 1fr',
				minHeight: '100vh',
			}}
		>
			<nav>
				<NavLink to='/home'>Home</NavLink>
				<br />
				<NavLink to='/about'>About</NavLink>
				<br />
				<NavLink to='/users'>Users</NavLink>
			</nav>
			<div style={{ border: '3px solid black' }}>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
