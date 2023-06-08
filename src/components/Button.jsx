import React, { Component } from 'react'

export class Button extends Component {
	// componentDidUpdate() {
	// 	console.log('Кнопка была обновлена изза пропсов')
	// }
	// componentWillUnmount() {
	// 	console.log('Меня удалили')
	// }
	render() {
		return <div>Моё значение {this.props.title}</div>
	}
}
