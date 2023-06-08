import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { Users } from './pages/Users'
import { SingleUser } from './pages/SingleUser'

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='home' element={<h1>Home</h1>} />
					<Route path='about' element={<h1>About</h1>} />
					<Route path='users' element={<Users />} />
					<Route path='users/:id' element={<SingleUser />} />
					<Route path='*' element={<h1>Page is not found</h1>} />
				</Route>
			</Routes>
		</>
	)
}
