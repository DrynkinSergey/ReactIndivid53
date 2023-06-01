import React from 'react'
import { Content } from './components/Content.jsx'
import { Header } from './components/TodoList/Header.jsx'
const todos = [
	{ id: 1, title: 'Read book' },
	{ id: 2, title: 'Learn react' },
	{ id: 3, title: 'JS' },
	{ id: 4, title: 'Redux' },
]
export class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<Content todos={todos} />
			</>
		)
	}
}

// function App() {
// 	const todos = [
// 		{ id: 1, title: 'Read book' },
// 		{ id: 2, title: 'Learn react' },
// 		{ id: 3, title: 'JS' },
// 		{ id: 4, title: 'Redux' },
// 	]
// 	return (
// 		<>
// 			<Header />
// 			<Content todos={todos} />
// 		</>
// 	)
// }

// export default App
